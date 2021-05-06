import Eris from "eris";
import { prefix } from "../../config";
import GuildConfig from "../core/config/GuildConfig";
import NicknameConfig from "../core/config/NicknameConfig";

class CommandHandler {
    constructor(message: Eris.Message, client: Eris.Client, rest: Eris.Client) {
        if (!message.content.startsWith(prefix)) return;

        let args = message.content.slice(prefix.length).trim().split(' ');

        // @ts-ignore
        let command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));

        if (!command) return;

        // @ts-ignore
        let guild = message.channel.guild;
        let guildConfig = new GuildConfig();
        let nickConfig = new NicknameConfig();

        command.execute({ 
            message, 
            args, 
            client, 
            rest, 
            guild, 
            guildConfig,
            nickConfig
        });
    }
}

export default CommandHandler;