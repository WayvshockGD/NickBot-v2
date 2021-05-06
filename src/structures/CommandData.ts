import Eris from "eris";

export default interface CommandData {
    message: Eris.Message;
    member: Eris.Member
    args: string[];
    client: Eris.Client;
    rest: Eris.Client
    guild: Eris.Guild;
}