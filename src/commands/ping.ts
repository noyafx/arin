import { Command } from '../types';
import { BaseInteraction, SlashCommandBuilder } from 'discord.js';

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setDescription("Check bot speed (*´ω｀*)")
    .setDMPermission(false),
  async execute(interaction: BaseInteraction) {
    try {
      await interaction.reply(`${Date.now() - interaction.createdTimestamp}ms`);
    } catch(err) {}
  }
};
