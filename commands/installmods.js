const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('installmods')
		.setDescription('Installs mods from the mod list'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('CHECK_FOR_UPDATES'));
        console.log(response);
		await interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};