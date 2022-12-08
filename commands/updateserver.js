const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('updateserver')
		.setDescription('Updates the ARK server and associated mods'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('UPDATE_SERVER'));
        console.log(response);
		await interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};