<div align="center">

<h1>@s1vann/discord-webhook</h1>

<p>
Modern Discord Webhook Framework for Node.js
</p>

<p>
<img src="https://img.shields.io/npm/v/@s1vann/discord-webhook?style=for-the-badge">
<img src="https://img.shields.io/npm/dt/@s1vann/discord-webhook?style=for-the-badge">
<img src="https://img.shields.io/github/license/sivvv0/discord-webhook?style=for-the-badge">
<img src="https://img.shields.io/node/v/@s1vann/discord-webhook?style=for-the-badge">
</p>

<p>
Fast • Modern • Powerful • Lightweight
</p>

</div>

<br>

<h2>✨ Features</h2>

<ul>
<li>⚡ Fast & Lightweight</li>
<li>🎨 Advanced Embed Builder</li>
<li>🔘 Buttons Support</li>
<li>📎 File Uploads</li>
<li>🗳 Poll Support</li>
<li>🧠 Queue System</li>
<li>🔄 Auto Retry</li>
<li>🧵 Thread Support</li>
<li>🛡 Rate Limit Protection</li>
<li>📡 Webhook Manager</li>
<li>🕒 Scheduler</li>
<li>🧪 Debug Logs</li>
<li>🔥 Fluent Builder API</li>
</ul>

<br>

<h2>📦 Installation</h2>

<pre><code>npm install @s1vann/discord-webhook</code></pre>

<br>

<h2>🚀 Quick Start</h2>

<pre><code class="language-js">
const Webhook = require('@s1vann/discord-webhook');

const webhook = new Webhook(
  'YOUR_WEBHOOK_URL'
);

webhook.send({
  content: 'Hello World'
});
</code></pre>

<br>

<h2>🎨 Embed Example</h2>

<pre><code class="language-js">
const Webhook = require(
  '@s1vann/discord-webhook'
);

const webhook = new Webhook(
  'YOUR_WEBHOOK_URL'
);

const embed = webhook
  .embed()
  .title('Anime')
  .description('Watching One Piece')
  .color('#5865F2')
  .thumbnail(
    'https://example.com/image.png'
  )
  .footer('Powered by s1vann')
  .timestamp();

webhook.send({
  embeds: [embed.build()]
});
</code></pre>

<br>

<h2>🔘 Buttons Example</h2>

<pre><code class="language-js">
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
  content: 'Buttons Example',
  components: buttons.build()
});
</code></pre>

<br>

<h2>📎 File Upload</h2>

<pre><code class="language-js">
webhook.file(
  './image.png',
  {
    content: 'Uploaded File'
  }
);
</code></pre>

<br>

<h2>🗳 Poll Example</h2>

<pre><code class="language-js">
webhook.poll({
  question: 'Best Anime?',
  answers: [
    'One Piece',
    'Naruto',
    'Bleach'
  ]
});
</code></pre>

<br>

<h2>✏ Edit Message</h2>

<pre><code class="language-js">
webhook.edit(
  'MESSAGE_ID',
  {
    content: 'Edited Message'
  }
);
</code></pre>

<br>

<h2>🗑 Delete Message</h2>

<pre><code class="language-js">
webhook.delete('MESSAGE_ID');
</code></pre>

<br>

<h2>🧠 Queue System</h2>

<pre><code class="language-js">
webhook.queue([
  {
    content: 'Message 1'
  },
  {
    content: 'Message 2'
  }
]);
</code></pre>

<br>

<h2>🔄 Auto Retry</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    retry: true,
    retryLimit: 5
  }
);
</code></pre>

<br>

<h2>🕒 Scheduler</h2>

<pre><code class="language-js">
webhook.schedule(
  '10:00 PM',
  {
    content: 'Daily Message'
  }
);
</code></pre>

<br>

<h2>📡 Webhook Manager</h2>

<pre><code class="language-js">
const manager = webhook.manager();

manager.add(
  'logs',
  'WEBHOOK_URL'
);

manager.send('logs', {
  content: 'Server Started'
});
</code></pre>

<br>

<h2>🔥 Fluent Builder API</h2>

<pre><code class="language-js">
webhook
  .message()
  .content('Watching Anime')
  .embed(
    webhook
      .embed()
      .title('One Piece')
      .description('Episode 1100')
  )
  .button(
    'Watch',
    'https://example.com'
  )
  .send();
</code></pre>

<br>

<h2>🧪 Debug Mode</h2>

<pre><code class="language-js">
const webhook = new Webhook(
  'YOUR_WEBHOOK_URL',
  {
    debug: true
  }
);
</code></pre>

<br>

<h2>⚙ Options</h2>

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
<td>queue</td>
<td>boolean</td>
<td>true</td>
</tr>
</table>

<br>

<h2>📋 Requirements</h2>

<ul>
<li>Node.js 18+</li>
<li>Discord Webhook URL</li>
</ul>

<br>

<h2>💡 Example Logger</h2>

<pre><code class="language-js">
const Webhook = require(
  '@s1vann/discord-webhook'
);

const logs = new Webhook(
  'YOUR_WEBHOOK_URL'
);

console.log = async (...args) => {
  await logs.send({
    content: args.join(' ')
  });
};
</code></pre>

<br>

<div align="center">

<h2>⭐ Support</h2>

<p>
If you like this project,
consider giving it a star on GitHub.
</p>

</div>

<br>

<div align="center">

Made with ❤️ by <b>@s1vann</b>

</div>
