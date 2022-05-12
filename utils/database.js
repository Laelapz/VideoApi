const { all } = require("express/lib/application");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

class Database {
    static async init() {
        await client.connect();
        this.db = client.db("video_api");
    }

    static getCollection( collectionName ) {
        return this.db.collection(collectionName);
    }

    static async insert (collection, data) {
        const collectionList = await this.connectDB(collection);
        const result = await collectionList.insertOne(data);
        console.log(result);
        return;
    }

    static async connectDB (collection) {
        await client.connect();
        const db = client.db("video_api");
        return db.collection(collection);
    }
}

module.exports = Database;