const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('startserver')
		.setDescription('Launches the ARK server'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.START_SERVER_BASIC)
        console.log(response);
		interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};