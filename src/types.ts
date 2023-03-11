import { BaseInteraction, Client as RawClient, ClientOptions, Collection } from 'discord.js';

export interface Event {
  once?: boolean;
  execute: Function;
};

export type CommandData = SlashCommandBuilder | ContextMenuCommandBuilder;

export interface Command {
  data: CommandData;
  execute(interaction: BaseInteraction): Promise<any>;
};

export class Client extends RawClient {
  commands: Collection<string, Command>;
  constructor(options: ClientOptions) {
    super(options);
    thid.commands = new Collection();
  }
};
