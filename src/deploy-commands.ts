import { CommandData } from './types';
import { REST, Routes } from 'discord.js';

const rest: REST = new REST({
  version: '10'
});
rest.setToken(process.env.DISCORD_TOKEN);

import * as commands from './commands/mod.ts';
(async () => {
  await rest.put(Routes.applicationCommands(process.env.DISCORD_ID), {
    body: Object.values(commands).map(ctx => ctx.data) as CommandData[]
  }) 
})();
