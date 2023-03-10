import { Client, Event } from '../types';

export const ready: Event = {
  once: true,
  async execute(client: Client) {
    console.log("Connected!");
  }
};
