<div align="center">
<h1>🚀 @s1vann/discord-webhook</h1>
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
⚡ Fast • 🎨 Modern • 🛡 Powerful • 🔥 Developer Friendly
</p>
</div>
<br>
---
# 📦 Installation
Install using npm:
```bash
npm install @s1vann/discord-webhook

or using yarn:

yarn add @s1vann/discord-webhook

⸻

🚀 Quick Start

const Webhook = require(
  '@s1vann/discord-webhook'
);
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL'
);
webhook.send({
  content: 'Hello World 🚀'
});

⸻

✨ Features

<ul>
<li>🎨 Advanced Embed Builder</li>
<li>🔥 Embed Themes</li>
<li>📦 Embed Templates</li>
<li>📨 Multi Message Sender</li>
<li>🪝 Auto Logger Hooks</li>
<li>🎤 Voice Message Uploads</li>
<li>🎥 Video Uploads</li>
<li>📊 Charts & Graphs</li>
<li>📂 Webhook Collections</li>
<li>🔘 Buttons Support</li>
<li>📎 File Uploads</li>
<li>🛡 Error Handling</li>
<li>⚡ Fast API Requests</li>
<li>🧠 Fluent Builder API</li>
<li>🧪 Debug Mode</li>
<li>🌈 Custom Themes</li>
</ul>

⸻

📁 Basic Example

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

⸻

🎨 Embed Builder

Create beautiful Discord embeds easily.

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

⸻

🌈 Embed Themes

Built-in themes:

<ul>
<li>anime</li>
<li>discord</li>
<li>cyberpunk</li>
<li>minimal</li>
</ul>

Example:

webhook
  .embed()
  .title('Cyberpunk Theme')
  .theme('cyberpunk');

⸻

📦 Embed Templates

Use prebuilt message templates.

Success Template

await webhook.template(
  'success',
  {
    description:
      'Database Connected'
  }
);

Error Template

await webhook.template(
  'error',
  {
    description:
      'Server Crashed'
  }
);

Anime Template

await webhook.template(
  'anime',
  {
    anime: 'One Piece',
    episode: '1100'
  }
);

⸻

📨 Multi Message Sender

Send multiple messages instantly.

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

⸻

🪝 Auto Logger Hooks

Automatically send console logs to Discord.

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

⸻

🎤 Voice Message Upload

Enable voice uploads:

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

⸻

🎥 Video Upload

Enable video uploads:

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

⸻

📊 Charts & Graphs

Generate chart-style embeds.

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

⸻

📂 Webhook Collections

Organize multiple webhook systems.

const logs =
  webhook.collection('logs');
logs.send({
  content:
    'Server Started'
});

⸻

🔘 Buttons

Create Discord link buttons.

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

⸻

📎 File Uploads

Upload files easily.

await webhook.file(
  './image.png',
  {
    content:
      'Uploaded Image'
  }
);

⸻

⚙ Options

Option	Type	Default
retry	boolean	true
retryLimit	number	5
debug	boolean	false
autoLogger	boolean	false
voice	boolean	false
video	boolean	false
charts	boolean	false

⸻

🧪 Debug Mode

const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    debug: true
  }
);

⸻

📋 Requirements

<ul>
<li>Node.js 18+</li>
<li>Discord Webhook URL</li>
</ul>

⸻

📦 Package Information

Property	Value
Package	@s1vann/discord-webhook
Runtime	Node.js
Module Type	CommonJS
License	MIT

⸻

🔥 Example Advanced Usage

const Webhook = require(
  '@s1vann/discord-webhook'
);
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    autoLogger: true,
    charts: true,
    voice: true,
    video: true,
    debug: true
  }
);
webhook.hookConsole();
const embed = webhook
  .embed()
  .title('Advanced Example')
  .description(
    'Modern Webhook Framework'
  )
  .theme('discord')
  .timestamp();
webhook.send({
  embeds: [embed.build()]
});

⸻

❤️ Support

If you enjoy this project:

⭐ Star the repository
📦 Share the package
🚀 Use it in your projects

⸻

<div align="center">
<h2>Made with ❤️ by @s1vann</h2>
<p>
Modern Discord Tools for Developers
</p>
</div>
```
:
