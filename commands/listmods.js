const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const {runCommand} = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');

const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('listmods')
		.setDescription('Lists all mods installed on the server'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('LIST_MODS'));
        console.log(response);
		await interaction.editReply(
            {
                content: response,
                ephemeral: false,
            }
        );
	},
};