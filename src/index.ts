import { Client } from './types';
import { Collection } from 'discord.js';

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

(async () => {
  await client.login(process.env.DISCORD_TOKEN);
})();
