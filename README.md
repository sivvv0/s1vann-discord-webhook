<div align="center">

<h1>
🚀 @s1vann/discord-webhook
</h1>

<p>
Modern Discord Webhook Framework for Node.js
</p>

<p>
Create powerful Discord webhook systems with embeds, themes, logging, uploads, charts, templates, bulk messaging, and more.
</p>

<p>

<img src="https://img.shields.io/npm/v/@s1vann/discord-webhook?style=for-the-badge">

<img src="https://img.shields.io/npm/dt/@s1vann/discord-webhook?style=for-the-badge">

<img src="https://img.shields.io/node/v/@s1vann/discord-webhook?style=for-the-badge">

<img src="https://img.shields.io/github/license/sivvv0/discord-webhook?style=for-the-badge">

</p>

<p>

<a href="#installation">Installation</a>
•
<a href="#quick-start">Quick Start</a>
•
<a href="#features">Features</a>
•
<a href="#examples">Examples</a>
•
<a href="#options">Options</a>

</p>

</div>

<br>

---

<h2 id="installation">
📦 Installation
</h2>

<p>
Install using npm:
</p>

```js
npm install @s1vann/discord-webhook
```

<p>
or using yarn:
</p>

```js
yarn add @s1vann/discord-webhook
```
<br>
<h2 id="quick-start">
🚀 Quick Start
</h2>

```js
const Webhook = require(
  '@s1vann/discord-webhook'
);

const webhook = new Webhook(
  'YOUR_WEBHOOK_URL'
);

webhook.send({
  content: 'Hello World 🚀'
});
```

<br>
<h2 id="features">
✨ Features
</h2>
<table>
<tr>
<th>Feature</th>
<th>Description</th>
</tr>
<tr>
<td>🎨 Embed Builder</td>
<td>Create advanced Discord embeds easily</td>
</tr>
<tr>
<td>🔥 Embed Themes</td>
<td>Built-in modern embed themes</td>
</tr>
<tr>
<td>📦 Embed Templates</td>
<td>Ready-to-use templates</td>
</tr>
<tr>
<td>📨 Multi Message Sender</td>
<td>Send multiple messages instantly</td>
</tr>
<tr>
<td>🪝 Auto Logger Hooks</td>
<td>Send console logs to Discord automatically</td>
</tr>
<tr>
<td>🎤 Voice Upload</td>
<td>Upload voice messages</td>
</tr>
<tr>
<td>🎥 Video Upload</td>
<td>Upload video files</td>
</tr>
<tr>
<td>📊 Charts & Graphs</td>
<td>Create chart-style embeds</td>
</tr>
<tr>
<td>📂 Webhook Collections</td>
<td>Organize multiple webhook systems</td>
</tr>
<tr>
<td>🔘 Buttons</td>
<td>Create Discord buttons easily</td>
</tr>
<tr>
<td>📎 File Uploads</td>
<td>Upload images and files</td>
</tr>
<tr>
<td>🧪 Debug Mode</td>
<td>Advanced debugging logs</td>
</tr>
</table>
<br>
<h2 id="examples">
📁 Basic Example
</h2>

```js
const Webhook = require(
  '@s1vann/discord-webhook'
);

const webhook = new Webhook(
  'YOUR_WEBHOOK_URL'
);

const embed = webhook
  .embed()
  .title('Server Started')
  .description(
    'Everything is running perfectly'
  )
  .theme('discord')
  .timestamp();

webhook.send({
  embeds: [embed.build()]
});
```
<br>
<h2>
🎨 Embed Builder
</h2>ml

```js
const embed = webhook
  .embed()
  .title('Anime Update')
  .description(
    'One Piece Episode 1100'
  )
  .field(
    'Status',
    'Released',
    true
  )
  .thumbnail(
    'https://example.com/image.png'
  )
  .theme('anime')
  .timestamp();

webhook.send({
  embeds: [embed.build()]
});
```
<br>
<h2>
🌈 Embed Themes
</h2>
<p>
Built-in themes:
</p>
<ul>
<li>anime</li>
<li>discord</li>
<li>cyberpunk</li>
<li>minimal</li>
</ul>

```js
webhook
  .embed()
  .title('Cyberpunk Theme')
  .theme('cyberpunk');
```
<br>
<h2>
📦 Embed Templates
</h2>
<p>
 Template:
</p>

```js
await webhook.template(
  'success',
  {
    description:
      'Database Connected'
  }
);

// Error Template
await webhook.template(
  'error',
  {
    description:
      'Server Crashed'
  }
);
// Anime Template
await webhook.template(
  'anime',
  {
    anime: 'One Piece',
    episode: '1100'
  }
);
```
<br>
<h2>
📨 Multi Message Sender
</h2>

```js
await webhook.bulk([

  {
    content: 'Message 1'
  },

  {
    content: 'Message 2'
  },

  {
    content: 'Message 3'
  }

]);
```
<br>
<h2>
🪝 Auto Logger Hooks
</h2>

```js
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    autoLogger: true
  }
);

webhook.hookConsole({

  log: true,
  error: true,
  warn: true

});

console.log(
  'Server Started'
);

console.error(
  'Database Error'
);
```
<br>
<h2>
🎤 Voice Message Upload
</h2>

```js
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    voice: true
  }
);

await webhook.voice(
  './voice.ogg',
  {
    content: 'Voice Message'
  }
);
```
<br>
<h2>
🎥 Video Upload
</h2>

```js
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    video: true
  }
);

await webhook.video(
  './video.mp4',
  {
    content: 'Video Upload'
  }
);
```
<br>
<h2>
📊 Charts & Graphs
</h2>

```js
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    charts: true
  }
);

await webhook.chart({

  title: 'Weekly Stats',

  labels: [
    'Mon',
    'Tue',
    'Wed'
  ],

  data: [
    10,
    25,
    40
  ]

});
```
<br>
<h2>
📂 Webhook Collections
</h2>

```js
const logs =
  webhook.collection('logs');

logs.send({
  content:
    'Server Started'
});
```
<br>
<h2>
🔘 Buttons
</h2>

```js
const buttons = webhook
  .buttons()
  .link(
    'Website',
    'https://example.com'
  )
  .link(
    'Discord',
    'https://discord.gg/example'
  );

webhook.send({

  content: 'Links',

  components:
    buttons.build()

});
```
<br>
<h2>
📎 File Uploads
</h2>

```js
await webhook.file(
  './image.png',
  {
    content:
      'Uploaded Image'
  }
);
```
<br>
<h2 id="options">
⚙ Options
</h2>
<table>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
</tr>
<tr>
<td>retry</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>retryLimit</td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>debug</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>autoLogger</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>voice</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>video</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>charts</td>
<td>boolean</td>
<td>false</td>
</tr>
</table>
<br>
<h2>
🧪 Debug Mode
</h2>

```js
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    debug: true
  }
);
```
<br>
<h2>
📋 Requirements
</h2>
<ul>
<li>Node.js 18+</li>
<li>Discord Webhook URL</li>
</ul>
<br>
<h2>
📦 Package Information
</h2>
<table>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
<tr>
<td>Package</td>
<td>@s1vann/discord-webhook</td>
</tr>
<tr>
<td>Runtime</td>
<td>Node.js</td>
</tr>
<tr>
<td>Module Type</td>
<td>CommonJS</td>
</tr>
<tr>
<td>License</td>
<td>MIT</td>
</tr>
</table>
<br>
<h2>
🔥 Advanced Example
</h2>


