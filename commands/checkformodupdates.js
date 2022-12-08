const { execSync } = require('child_process');
const { SlashCommandBuilder } = require('discord.js');
const {runCommand} = require('../util/SystemCommandHandler.js');
const { Constants } = require('../util/Constants.js');

const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkformodupdates')
		.setDescription('Checks for mod updates'),
	async execute(interaction) {
        await interaction.deferReply();
        let response = runCommand(Constants.get('CHECK_FOR_MOD_UPDATES'));
        wait(2500);
        console.log(response);
		await interaction.editReply(
            {
                content: response,
            }
        );
	},
};