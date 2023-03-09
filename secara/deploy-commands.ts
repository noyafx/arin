import { REST, Routes } from 'discord.js';

const rest: REST = new REST({
  version: '10'
});
rest.setToken(process.env.DISCORD_TOKEN);

(async () => {
  await rest.put(Routes.applicationCommands(process.env.DISCORD_ID), {
    body: []
  }) 
})();
