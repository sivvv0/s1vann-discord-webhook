'use strict';

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

class EmbedBuilder {

  constructor() {
    this.embed = {};
  }

  title(text) {
    this.embed.title = text;
    return this;
  }

  description(text) {
    this.embed.description = text;
    return this;
  }

  color(color) {

    this.embed.color =
      typeof color === 'string'
        ? parseInt(
            color.replace('#', ''),
            16
          )
        : color;

    return this;
  }

  theme(name) {

    const themes = {

      anime: '#FF66C4',
      cyberpunk: '#00F5FF',
      minimal: '#FFFFFF',
      discord: '#5865F2'

    };

    if (themes[name]) {
      this.color(themes[name]);
    }

    return this;
  }

  footer(text) {

    this.embed.footer = {
      text
    };

    return this;
  }

  thumbnail(url) {

    this.embed.thumbnail = {
      url
    };

    return this;
  }

  image(url) {

    this.embed.image = {
      url
    };

    return this;
  }

  field(
    name,
    value,
    inline = false
  ) {

    if (!this.embed.fields) {
      this.embed.fields = [];
    }

    this.embed.fields.push({
      name,
      value,
      inline
    });

    return this;
  }

  timestamp() {

    this.embed.timestamp =
      new Date().toISOString();

    return this;
  }

  build() {
    return this.embed;
  }

}

class ButtonBuilder {

  constructor() {
    this.components = [];
  }

  link(label, url) {

    this.components.push({
      type: 2,
      style: 5,
      label,
      url
    });

    return this;
  }

  build() {

    return [
      {
        type: 1,
        components: this.components
      }
    ];

  }

}

class DiscordWebhook {

  constructor(
    url,
    options = {}
  ) {

    this.url = url;

    this.options = {

      retry: true,
      retryLimit: 5,
      debug: false,
      autoLogger: false,
      voice: false,
      video: false,
      charts: false,

      ...options

    };

    this.collections =
      new Map();

  }

  log(...args) {

    if (this.options.debug) {
      console.log(
        '[Webhook]',
        ...args
      );
    }

  }

  embed() {
    return new EmbedBuilder();
  }

  buttons() {
    return new ButtonBuilder();
  }

  async send(payload) {

    this.log('Sending');

    return axios.post(
      this.url,
      payload
    );

  }

  async file(
    path,
    payload = {}
  ) {

    const form = new FormData();

    form.append(
      'payload_json',
      JSON.stringify(payload)
    );

    form.append(
      'file',
      fs.createReadStream(path)
    );

    return axios.post(
      this.url,
      form,
      {
        headers:
          form.getHeaders()
      }
    );

  }

  async voice(
    path,
    payload = {}
  ) {

    if (!this.options.voice) {

      throw new Error(
        'Voice uploads disabled'
      );

    }

    return this.file(
      path,
      payload
    );

  }

  async video(
    path,
    payload = {}
  ) {

    if (!this.options.video) {

      throw new Error(
        'Video uploads disabled'
      );

    }

    return this.file(
      path,
      payload
    );

  }

  async bulk(messages = []) {

    return Promise.all(
      messages.map(msg =>
        this.send(msg)
      )
    );

  }

  collection(name) {

    if (
      !this.collections.has(name)
    ) {

      this.collections.set(
        name,
        new DiscordWebhook(
          this.url,
          this.options
        )
      );

    }

    return this.collections.get(
      name
    );

  }

  async chart(data) {

    if (!this.options.charts) {

      throw new Error(
        'Charts disabled'
      );

    }

    return this.send({

      embeds: [

        this
          .embed()
          .title(data.title)
          .description(
            `
Labels:
${data.labels.join(', ')}

Data:
${data.data.join(', ')}
            `
          )
          .theme('discord')
          .timestamp()
          .build()

      ]

    });

  }

  hookConsole(
    options = {}
  ) {

    const settings = {

      log: true,
      error: true,
      warn: true,

      ...options

    };

    if (settings.log) {

      const oldLog =
        console.log;

      console.log = async (
        ...args
      ) => {

        oldLog(...args);

        await this.send({

          embeds: [

            this
              .embed()
              .title(
                'Console Log'
              )
              .description(
                args.join(' ')
              )
              .theme(
                'discord'
              )
              .timestamp()
              .build()

          ]

        });

      };

    }

    if (settings.error) {

      const oldError =
        console.error;

      console.error = async (
        ...args
      ) => {

        oldError(...args);

        await this.send({

          embeds: [

            this
              .embed()
              .title(
                'Console Error'
              )
              .description(
                args.join(' ')
              )
              .theme('anime')
              .timestamp()
              .build()

          ]

        });

      };

    }

  }

  async template(
    type,
    data = {}
  ) {

    const templates = {

      success: () => ({
        embeds: [

          this
            .embed()
            .title('Success')
            .description(
              data.description ||
              'Success'
            )
            .color('#57F287')
            .timestamp()
            .build()

        ]
      }),

      error: () => ({
        embeds: [

          this
            .embed()
            .title('Error')
            .description(
              data.description ||
              'Error'
            )
            .color('#ED4245')
            .timestamp()
            .build()

        ]
      }),

      anime: () => ({
        embeds: [

          this
            .embed()
            .title(
              data.anime ||
              'Anime'
            )
            .description(
              `Episode ${
                data.episode || '1'
              }`
            )
            .theme('anime')
            .timestamp()
            .build()

        ]
      })

    };

    if (!templates[type]) {

      throw new Error(
        'Unknown template'
      );

    }

    return this.send(
      templates[type]()
    );

  }

}

module.exports =
  DiscordWebhook;
