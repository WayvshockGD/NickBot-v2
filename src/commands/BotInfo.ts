import Command from "../structures/Command";
import CommandData from "../structures/CommandData";
import os from 'os';
import { devID } from "../../config";

class BotInfo extends Command {
    constructor(command: any) {
        super(command);

        this.name    = 'botinfo';
        this.aliases = [ 'stats' ];
    } 

    async execute({ message, client, rest }: CommandData) {
        
        let embed = {
            title: `Bot info of ${client.user.username}`,
            color: this.utils.getColor('info'),
            footer: {
                text: '',
                icon_url: ''
            },
            fields: [
                { name: 'Servers', value: client.guilds.size.toString(), inline: true },
                { name: 'Shards', value: `${client.shards.size} / ${client.options.maxShards}`, inline: true },
                { name: 'Users', value: client.users.size.toString(), inline: true },
                { name: 'Load average', value: os.loadavg().join(', ').toString(), inline: true },
                { name: 'Platform', value: os.platform(), inline: true },
                { name: 'Cpu Cores', value: os.cpus().length, inline: true }
            ]
        }

        await rest.getRESTUser(devID).then(u => {
            embed.footer.text = `Created by ${u.username}#${u.discriminator}`;
            embed.footer.icon_url = u.avatarURL;
        })
        
        return this.sendMessage(message, { embed });
    }
}

export default BotInfo;