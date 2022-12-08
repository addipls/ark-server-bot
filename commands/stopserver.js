const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('stopserver')
		.setDescription('Stops the ARK server'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('STOP_SERVER_BASIC'));
        console.log(response);
		await interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};