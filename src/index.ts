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
for (const event of Object.entries(events)) {
  client[event.once ? "once" : "on"](event.name, (...args) => event.execute(...args));
};

(async () => {
  await client.login(process.env.DISCORD_TOKEN);
})();

// 4 * 60 * 60 * 1000
setTimeout(() => process.exit(0), 4 * 60 * 60 * 1000);
