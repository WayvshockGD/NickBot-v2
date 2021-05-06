import Eris from "eris";
import { model, Schema } from "mongoose";

let dataModel = new Schema({
    guildID: { type: String },
    userID: { type: String },
    id:     { type: String },
    nickname: { type: String },
    date: { String }
});

let handleData = model('nick', dataModel);

class NicknameConfig {
    async add(member: Eris.Member, nickname: string, guild: Eris.Guild, id: string) {
        let data = await handleData.findOne({ userID: member.username, guildID: guild.id });

        if (data) return true;

        let newData = await new handleData({
            guildID: guild.id,
            userID: member.id,
            id: id,
            nickname: nickname,
            date: new Date()
        });
        await newData.save();
    }

    async subtract(member: Eris.Member, guild: Eris.Guild, id: string) {
        let data = await handleData.deleteOne({
            guildID: guild.id,
            userID: member.id,
        });
        data.save();
    }
}

export default NicknameConfig;