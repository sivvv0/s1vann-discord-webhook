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
        ? parseInt(color.replace('#', ''), 16)
        : color;

    return this;
  }

  url(url) {
    this.embed.url = url;
    return this;
  }

  author(name, icon_url = null) {
    this.embed.author = { name, icon_url };
    return this;
  }

  thumbnail(url) {
    this.embed.thumbnail = { url };
    return this;
  }

  image(url) {
    this.embed.image = { url };
    return this;
  }

  footer(text, icon_url = null) {
    this.embed.footer = {
      text,
      icon_url
    };

    return this;
  }

  field(name, value, inline = false) {
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

  timestamp(date = new Date()) {
    this.embed.timestamp = date.toISOString();
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

class MessageBuilder {
  constructor(webhook) {
    this.webhook = webhook;
    this.payload = {};
  }

  content(text) {
    this.payload.content = text;
    return this;
  }

  username(name) {
    this.payload.username = name;
    return this;
  }

  avatar(url) {
    this.payload.avatar_url = url;
    return this;
  }

  embed(embed) {
    if (!this.payload.embeds) {
      this.payload.embeds = [];
    }

    this.payload.embeds.push(
      embed.build ? embed.build() : embed
    );

    return this;
  }

  button(label, url) {
    const row = new ButtonBuilder()
      .link(label, url)
      .build();

    this.payload.components = row;

    return this;
  }

  async send() {
    return this.webhook.send(this.payload);
  }
}

class WebhookManager {
  constructor(parent) {
    this.parent = parent;
    this.webhooks = new Map();
  }

  add(name, url) {
    this.webhooks.set(
      name,
      new DiscordWebhook(url)
    );

    return this;
  }

  get(name) {
    return this.webhooks.get(name);
  }

  async send(name, payload) {
    const hook = this.get(name);

    if (!hook) {
      throw new Error(
        `Webhook "${name}" not found`
      );
    }

    return hook.send(payload);
  }
}

class DiscordWebhook {
  constructor(url, options = {}) {
    if (!url) {
      throw new Error('Webhook URL is required');
    }

    this.url = url;

    this.options = {
      retry: true,
      retryLimit: 5,
      debug: false,
      queue: true,
      ...options
    };

    this.queueItems = [];
    this.processing = false;
  }

  log(...args) {
    if (this.options.debug) {
      console.log(
        '[DiscordWebhook]',
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

  message() {
    return new MessageBuilder(this);
  }

  manager() {
    return new WebhookManager(this);
  }

  async request(payload, files = null) {
    try {
      if (files) {
        const form = new FormData();

        form.append(
          'payload_json',
          JSON.stringify(payload)
        );

        files.forEach((file, index) => {
          form.append(
            `files[${index}]`,
            fs.createReadStream(file)
          );
        });

        return axios.post(
          this.url,
          form,
          {
            headers: form.getHeaders()
          }
        );
      }

      return axios.post(
        this.url,
        payload
      );

    } catch (err) {
      this.log(err.message);

      if (this.options.retry) {
        return this.retry(payload, files);
      }

      throw err;
    }
  }

  async retry(payload, files) {
    for (
      let i = 0;
      i < this.options.retryLimit;
      i++
    ) {
      try {
        this.log(
          `Retry ${i + 1}`
        );

        return await this.request(
          payload,
          files
        );

      } catch (err) {
        if (
          i ===
          this.options.retryLimit - 1
        ) {
          throw err;
        }
      }
    }
  }

  async send(payload) {
    this.log('Sending message');

    return this.request(payload);
  }

  async file(path, payload = {}) {
    return this.request(
      payload,
      [path]
    );
  }

  async files(paths, payload = {}) {
    return this.request(
      payload,
      paths
    );
  }

  async poll(data) {
    return this.send({
      poll: {
        question: {
          text: data.question
        },

        answers: data.answers.map(
          answer => ({
            poll_media: {
              text: answer
            }
          })
        ),

        duration: data.duration || 24
      }
    });
  }

  async edit(messageId, payload) {
    return axios.patch(
      `${this.url}/messages/${messageId}`,
      payload
    );
  }

  async delete(messageId) {
    return axios.delete(
      `${this.url}/messages/${messageId}`
    );
  }

  async success(text) {
    return this.send({
      embeds: [
        this.embed()
          .title('Success')
          .description(text)
          .color('#57F287')
          .timestamp()
          .build()
      ]
    });
  }

  async error(text) {
    return this.send({
      embeds: [
        this.embed()
          .title('Error')
          .description(text)
          .color('#ED4245')
          .timestamp()
          .build()
      ]
    });
  }

  async warning(text) {
    return this.send({
      embeds: [
        this.embed()
          .title('Warning')
          .description(text)
          .color('#FEE75C')
          .timestamp()
          .build()
      ]
    });
  }

  queue(messages = []) {
    this.queueItems.push(...messages);

    if (!this.processing) {
      this.processQueue();
    }
  }

  async processQueue() {
    this.processing = true;

    while (
      this.queueItems.length > 0
    ) {
      const message =
        this.queueItems.shift();

      try {
        await this.send(message);

        await new Promise(resolve =>
          setTimeout(resolve, 1000)
        );

      } catch (err) {
        console.error(err);
      }
    }

    this.processing = false;
  }

  schedule(time, payload) {
    const now = new Date();

    const [hour, minute] =
      time.split(':');

    const target = new Date();

    target.setHours(hour);
    target.setMinutes(minute);
    target.setSeconds(0);

    let delay =
      target.getTime() -
      now.getTime();

    if (delay < 0) {
      delay += 86400000;
    }

    setTimeout(() => {
      this.send(payload);
    }, delay);
  }

  template(type, text) {
    switch (type) {
      case 'success':
        return this.success(text);

      case 'error':
        return this.error(text);

      case 'warning':
        return this.warning(text);

      default:
        throw new Error(
          'Unknown template'
        );
    }
  }
}

module.exports = DiscordWebhook;
