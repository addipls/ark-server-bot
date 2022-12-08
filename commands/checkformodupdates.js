const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkformodupdates')
		.setDescription('Checks if an update to the Ark mods is available'),
	async execute(interaction) {
        await interaction.reply("Checking for mod updates...");
        let response = runCommand(Constants.get('CHECK_FOR_MOD_UPDATES'));
        console.log(response);
		await interaction.editReply(
            {
                content: response,
            }
        );
	},
};