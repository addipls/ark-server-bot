# ark-server-bot
Uses Discord.js to create a Discord bot that launches specified commands.

I make no promises that it will work as intended nor that it isn't an awful solution. The output is unfiltered from the arkmanager output, it is not pretty and may contain information that you don't want others to see.  It is not a priority of mine to update this in any way, as I am only using it to provide a simple way to manage a **single server** for my friend and I.  

## If for some reason you want to try to use it, here's how on Ubuntu:
1. Install Node using the Node Version Manager.  Here's a useful guide on doing that: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
2. Clone the repo.  I clone it in the home directory alongside my ARK instances.  
3. Change into the directory that you just created: `cd ark-server-bot`
4. Rename the .env-template file to just .env: `mv .env-template .env`
5. Fill out the .env with the appropriate Discord ID's and invite your bot to your server.  
6. Deploy the commands with Discord using `node deploy-commands.js`.  This will create the slash (/) commands in your Discord server
7. Finally, run the actual bot using `node main.js` or `screen node main.js`

## Commands Implemented
If you need to find exactly what a command is doing, locate it in ./util/Constants.js and understand it by finding the associated arkmanager command here: https://github.com/arkmanager/ark-server-tools 

- /checkforupdates
- /installmods
- /listmods
- /ping
- /restartserver
- /startserver
- /status
- /stopserver
- /uninstallmods
- /updateserver
