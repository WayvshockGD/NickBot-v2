import Command from "../structures/Command";
import CommandData from "../structures/CommandData";

class Nick extends Command {
    constructor(command: any) {
        super(command);

        this.name    = 'nick';
        this.aliases = [ 'nickname' ];
    }

    public execute({ message, client, args }: CommandData) {

        if (!args.join(' ').slice(this.name.length +1)) {
            return this.sendMessage(message, ':x:  |  There were no arguments present.');
        };

        new this.utils.Log(client, { 
            type: 'Nickname',

            //@ts-ignore
            member: message.member,
            nickname: args.join(' ').slice(this.name.length +1),
            message: message,
            channelID: '762560786114936833',
            date: new Date()
         });
    }
}

export default Nick;