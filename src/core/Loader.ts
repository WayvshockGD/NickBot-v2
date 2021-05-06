import Eris from 'eris';
import fs from 'fs';
import Helper from '../Helper';

class Loader extends Helper {
    constructor(client: Eris.Client|any) {
        super();

        let folder = fs.readdirSync('./build/src/commands/').filter(f => f.endsWith('.js'));

        //@ts-ignore
        client.commands = new Eris.Collection();

        // @ts-ignore
        client.aliases = new Eris.Collection();

        for (let file of folder) {
            let payLoad = require(`../commands/${file}`);
            let command = new payLoad.default();
            client.commands.set(command.name, command);
            this.logger('INFO', `Loaded command [${command.name}]`, 'LOADER');
            for (let alias of command.aliases) {
                client.aliases.set(alias, command.name);
            }
        }
    }
}

export default Loader;