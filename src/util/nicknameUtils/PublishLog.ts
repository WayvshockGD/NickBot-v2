import Eris from "eris";

type embedType = 'ModAction' | 'NickAction' | 'Reject' | 'Accept' | 'Nickname';

interface EmbedLayout {
    type: embedType;
    member: Eris.Member;
    nickname: string;
    message: Eris.Message;
    channelID: string;
    date: Date;
}

class PublishLog {
    constructor(client: Eris.Client, payload: EmbedLayout) {

        let c = 0x2965ff;

        if (payload.type === 'ModAction') {
            client.createMessage(payload.channelID, {
                embed: {
                    title: 'Mod action',
                    color: c,
                    description: `Nickname ${payload.nickname} from ${payload.member.username} got changed by ${payload.message.author.username}.`,
                    footer: {
                        text: payload.date.toString()
                    }
                }
            });
            return; 
        } else if (payload.type === 'NickAction') {
            client.createMessage(payload.channelID, {
                embed: {
                    title: 'Nick action',
                    color: c,
                    description: `${payload.member.username} got changed to ${payload.nickname}.`,
                    footer: {
                        text: payload.date.toString()
                    }
                }
            });
            return; 
        } else if (payload.type === 'Accept') {
            client.createMessage(payload.channelID, {
                embed: {
                    title: 'Accepted',
                    color: c,
                    description: `${payload.member}'s nickname \`${payload.nickname}\` got accepted by ${payload.message.author.username}.`,
                    footer: {
                        text: payload.date.toString()
                    }
                }
            });
            return; 
        } else if (payload.type === 'Reject') {
            client.createMessage(payload.channelID, {
                embed: {
                    title: 'Rejected',
                    color: c,
                    description: `${payload.member}'s nickname \`${payload.nickname}\` got rejected by ${payload.message.author.username}.`,
                    footer: {
                        text: payload.date.toString()
                    }
                }
            });
            return; 
        } else if (payload.type === 'Nickname') {
            client.createMessage(payload.channelID, {
                embed: {
                    title: `Nickname by ${payload.member.username}`,
                    color: c,
                    description: `${payload.message.author.username}'s username nickname request \`${payload.nickname}\` has been sent.`,
                    footer: {
                        text: payload.date.toString()
                    }
                }
            });
            return; 
        }
    }
}

export default PublishLog;