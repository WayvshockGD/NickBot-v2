import Markdown from "./Markdown";
import Eris from 'eris';
import PublishLog from "./nicknameUtils/PublishLog";

type typeColors = "warn" | "info" | "nickname" | "default";

class Utility {
    
    public getColor(color: typeColors) {

        let colors = {
            default: 0x26ff7d,
            warn: 0xff4d29,
            info: 0xff4a26,
            nickname: 0x2965ff,
        }

        return colors[color];
    }

    get markdown() {
        return new Markdown();
    }

    get Log() {
        return PublishLog;
    }

    public toInt(hex: string): number {
        let parsed = parseInt(hex);
        if (parsed === NaN) return 0;
        return parsed;
    }
}

export default Utility;