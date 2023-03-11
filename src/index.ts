import { Client } from './types';
import { ActivityType, Collection } from 'discord.js';

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ],
  presence: {
    activities: [
      { name: "emptiness", type: ActivityType.Listening }
    ]
  }
});

import * as events from './events/mod.ts';
for (const [eventName, event] of Object.entries(events)) {
  client[event.once ? "once" : "on"](eventName, (...args) => event.execute(...args));
};

import * as commands from './commands/mod.ts';
for (const [commandName, command] of Object.entries(commands)) {
  client.commands.set(commandName, command);
};

client.login(process.env.DISCORD_TOKEN);

// 4 * 60 * 60 * 1000
setTimeout(() => process.exit(0), 4 * 60 * 60 * 1000);
