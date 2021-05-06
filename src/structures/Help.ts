import Eris from "eris";
import { prefix } from "../../config";
import CommandList from "../CommandList";
import Utility from "../util/Utility";

class Help extends Utility {

    constructor(args: string[], message: Eris.Message, commands: any, aliases: any) {
        super();

        if (!args.length) {
            message.channel.createMessage({
                embed: {
                    color: this.getColor('default'),
                    fields: [
                        { 
                            name: 'Core', 
                            value: `${prefix}${CommandList.core.join(`\n${prefix}`).toLowerCase()}`,
                            inline: true
                        }
                    ]
                }
            });

            return;
        }
    }
}

export default Help;