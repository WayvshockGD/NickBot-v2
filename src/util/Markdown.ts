class Markdown {
    public codeBlock(args: string, lang?: string) {
        return `${'```'}${lang || ''}\n${args}\n${'```'}`;
    }

    public line(args: string) {
        return `\`${args}\``;
    }
}

export default Markdown;