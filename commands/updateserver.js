const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('updateserver')
		.setDescription('Updates the ARK server'),
	async execute(interaction) {
        let response = runCommand(Constants.get('UPDATE_SERVER'));
        console.log(response);
		interaction.reply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};