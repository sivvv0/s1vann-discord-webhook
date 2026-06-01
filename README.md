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
