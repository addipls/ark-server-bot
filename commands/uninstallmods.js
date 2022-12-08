const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('uninstallmods')
		.setDescription('Uninstalls all mods from the server'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('UNINSTALL_MODS'));
        console.log(response);
		interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};