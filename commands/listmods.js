const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const {runCommand} = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('listmods')
		.setDescription('Lists all mods installed on the server'),
	async execute(interaction) {
        let response = runCommand(Constants.get('LIST_MODS'));
        console.log(response);
		interaction.reply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};