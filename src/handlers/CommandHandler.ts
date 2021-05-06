import Eris from "eris";
import { prefix } from "../../config";
import Help from "../structures/Help";

class CommandHandler {
    constructor(message: Eris.Message, client: Eris.Client, rest: Eris.Client) {
        if (!message.content.startsWith(prefix)) return;

        let args = message.content.slice(prefix.length).trim().split(' ');

        // @ts-ignore
        let command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));

        if (!command) return;

        // @ts-ignore
        let guild = message.channel.guild;

        command.execute({ message, args, client, rest, guild });
    }
}

export default CommandHandler;