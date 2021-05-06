import Eris from "eris";
import GuildConfig from "../core/config/GuildConfig";
import NicknameConfig from "../core/config/NicknameConfig";

export default interface CommandData {
    message: Eris.Message;
    member: Eris.Member
    args: string[];
    client: Eris.Client;
    rest: Eris.Client
    guild: Eris.Guild;
    guildConfig: GuildConfig;
    nicknameConfig: NicknameConfig;
}