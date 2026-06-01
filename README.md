<div align="center">

<h1>@s1vann/discord-webhook</h1>

<p>
Modern Discord Webhook Framework
</p>

<p>
Fast • Powerful • Modern
</p>

</div>

<br>

<h2>📦 Installation</h2>

<pre><code>npm install @s1vann/discord-webhook</code></pre>

<br>

<h2>🚀 Quick Start</h2>

<pre><code class="language-js">
const Webhook = require(
  '@s1vann/discord-webhook'
);

const webhook = new Webhook(
  'WEBHOOK_URL'
);

webhook.send({
  content: 'Hello World'
});
</code></pre>

<br>

<h2>✨ Features</h2>

<ul>
<li>🎨 Embed Builder</li>
<li>🔥 Embed Themes</li>
<li>📦 Embed Templates</li>
<li>📨 Multi Message Sender</li>
<li>🪝 Auto Logger Hooks</li>
<li>🎤 Voice Upload</li>
<li>🎥 Video Upload</li>
<li>📊 Charts & Graphs</li>
<li>📂 Webhook Collections</li>
<li>🔘 Buttons</li>
<li>📎 File Uploads</li>
</ul>

<br>

<h2>🎨 Embed Themes</h2>

<pre><code class="language-js">
const embed = webhook
  .embed()
  .title('Anime')
  .description('Episode 1100')
  .theme('anime')
  .timestamp();

webhook.send({
  embeds: [embed.build()]
});
</code></pre>

<br>

<h2>📦 Embed Templates</h2>

<pre><code class="language-js">
await webhook.template(
  'success',
  {
    description:
      'Everything worked'
  }
);
</code></pre>

<br>

<h2>📨 Multi Message Sender</h2>

<pre><code class="language-js">
await webhook.bulk([
  {
    content: 'Message 1'
  },
  {
    content: 'Message 2'
  }
]);
</code></pre>

<br>

<h2>🪝 Auto Logger Hooks</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'WEBHOOK_URL',
  {
    autoLogger: true
  }
);

webhook.hookConsole({
  log: true,
  error: true
});

console.log('Server Started');
</code></pre>

<br>

<h2>🎤 Voice Upload</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'WEBHOOK_URL',
  {
    voice: true
  }
);

await webhook.voice(
  './voice.ogg'
);
</code></pre>

<br>

<h2>🎥 Video Upload</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'WEBHOOK_URL',
  {
    video: true
  }
);

await webhook.video(
  './video.mp4'
);
</code></pre>

<br>

<h2>📊 Charts & Graphs</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'WEBHOOK_URL',
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
    20,
    30
  ]

});
</code></pre>

<br>

<h2>📂 Webhook Collections</h2>

<pre><code class="language-js">
const logs =
  webhook.collection('logs');

logs.send({
  content:
    'Server Started'
});
</code></pre>

<br>

<div align="center">

Made with ❤️ by <b>@s1vann</b>

</div>
