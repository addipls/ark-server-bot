const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const { runCommand } = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkforupdates')
		.setDescription('Checks if an update to the Ark server is available'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('CHECK_FOR_UPDATES'));
        console.log(response);
		interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};