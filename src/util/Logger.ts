import Chalk from 'chalk';

type logType = "WARN" | "ERROR" | "SUCCESS" | "INFO";

export default function Logger(type: logType, message: string|Error, box: string|number) {
    switch (type) {
        case 'SUCCESS':
            console.log(`[${type.toLowerCase()}][${box}] -> [✅] ${Chalk.green(message)}`);
            break;
        case 'WARN':
            console.log(`[${type.toLowerCase()}][${box}] -> [⚠️] ${Chalk.yellow(message)}`);
            break;
        case 'ERROR':
            console.log(`[${type.toLowerCase()}][${box}] -> [🔥] ${Chalk.red(message)}`);
            break;
        case 'INFO':
            console.log(`[${type.toLowerCase()}][${box}] -> [️️️️☑️] ${Chalk.cyan(message)}`);
            break;
        default:
            break;
    }
}