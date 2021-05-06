import { Client } from 'eris';
import { options, prefix } from '../../config';
import CommandHandler from '../handlers/CommandHandler';
import ErrorHandler from '../handlers/ErrorHandler';
import Help from '../structures/Help';
import Logger from '../util/Logger';
import Loader from './Loader';

class NickClient {

    client: Client;

    _restClient: Client;

    constructor(token: string) {

        this.client = new Client(token, options.clientOptions);
        this._restClient = new Client(token, options.restOptions);

        new ErrorHandler(this.client);
        new ErrorHandler(this._restClient);
        new Loader(this.client);

        this.client.on("messageCreate", (message) => {
            if (message.content.startsWith(`${prefix}help`)) {
                let args = message.content.slice(prefix.length).split(' ');
                let command = args.shift()?.toLowerCase();

                // @ts-ignore
                new Help(args, message, this.client.commands, this.client.aliases);
            }

            // @ts-ignore
            new CommandHandler(message, this.client, this._restClient);
        })

        this.onReady();
    }

    public onReady() {
        this.client.once('ready', () => {

            // @ts-ignore
            Logger('INFO', `Loaded [${this.client.commands.size} (+ help)] commands with [${this.client.aliases.size}] Aliases.`, 'client');
            Logger('SUCCESS', `Logged in as bot [${this.client.user.username}#${this.client.user.discriminator}]`, 'client');
        })
    }

    public run() {
        this.client.connect();
        this._restClient.connect();
    }
    
}

export default NickClient;