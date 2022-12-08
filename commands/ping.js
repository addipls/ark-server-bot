const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Test if the bot is online'),
	async execute(interaction) {
		await interaction.reply('Here I am!');
	},
};