import db from "mongoose";

class GuildConfig {
    async set(model: db.Schema, baseSchema: object, schema: object, collection: string) {
        let data = db.model(collection, model);

        let settings = await data.findOne({ baseSchema });
        let newData = await new settings({ schema });
        await newData.save();
    }

    async delete(model: any, baseSchema: object, schema: object) {
        let settings = await model.findOne({ baseSchema });

        let data = await settings.findOneAndDelete({ schema });
        await data.save();
    }

    async update(model: any, baseSchema: object, schema: object) {
        let settings = await model.findOne({ baseSchema });

        let data = await settings.findOneAndUpdate({ schema });
        data.save();
    }
}

export default GuildConfig;