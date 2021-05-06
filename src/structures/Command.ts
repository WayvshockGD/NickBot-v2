import Eris from "eris";
import Logger from "../util/Logger";
import Utility from "../util/Utility";

interface ICommand {
    name: string;
    description: string;
    aliases: string[];
    permissions: string[];
    requiredPermission: string;
}

class Command implements ICommand {
    name: string;
    description: string;
    aliases: string[];
    permissions: string[];
    requiredPermission: string;

    constructor(command: any) {
        this.name = command || '';
        this.description = command || '';
        this.aliases = command || [];
        this.permissions = command || [];
        this.requiredPermission = command || '';
    }

    get logger() {
        return Logger;
    }

    get utils() {
        return new Utility();
    }

    public sendMessage(message: Eris.Message, text: string|object) {
        return message.channel.createMessage(text);
    }
}

export default Command;