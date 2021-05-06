import Command from "../structures/Command";
import CommandData from "../structures/CommandData";

class Ping extends Command {
    constructor(command: any) {
        super(command);

        this.name        = 'ping';
        this.description = 'Pings the bot.';
    }

    public execute({ message }: CommandData) {
        let now = Date.now();

        return message.channel.createMessage('Pinging...').then(msg => {
            let diff = (Date.now() - now);
            msg.edit(`:ping_pong: ${this.utils.markdown.line(diff.toString())} ms`);
        })
    }
}

export default Ping;