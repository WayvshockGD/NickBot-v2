import Eris from "eris";
import Helper from "../Helper";
import process from 'process';

class ErrorHandler extends Helper {
    constructor(client: Eris.Client) {
        super();

        process.on('uncaughtException', this.error.bind(this));
        process.on('unhandledRejection', this.error.bind(this));

        client.on('error', this.error.bind(this));
        client.on('warn', this.warn.bind(this));

        client.on('shardDisconnect', this.handleShardWarnings.bind(this));
        client.on('shardReady', (id) => this.handleShardProcess(id, true));
        client.on('shardResume', (id) => this.handleShardProcess(id, false));
    }

    public error(error: Error) {
        this.logger('ERROR', error, 'errorHandler');
    }

    public warn(error: Error) {
        this.logger('WARN', error, 'errorHandler');
    }

    public handleShardWarnings(error: Error, id: number) {
        this.logger('ERROR', error, `shard (${id})`);
    }

    public handleShardProcess(id: number, type: boolean) {
        let warnType = type ? 'Shard is ready' : 'Shard is on resume';
        this.logger('INFO', warnType, `shard id (${id})`);
    }
}

export default ErrorHandler;