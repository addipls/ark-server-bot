// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
dotenv.config(); // Load environment variables

// Bot has spun up, log that it has done so
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Use .env token to authenticate with Discord
client.login(process.env.TOKEN);