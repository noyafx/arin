import { Client as RawClient, ClientOptions, Collection } from 'discord.js';

export interface Command {
  data: SlashCommandBuilder | ContextMenuCommandBuilder;
  execute: Function
};

export class Client extends RawClient {
  commands: Collection<string, Command>
  constructor(options: ClientOptions) {
    super(options);
    thid.commands = new Collection();
  }
};
