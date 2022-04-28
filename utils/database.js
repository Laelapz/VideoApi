const { all } = require("express/lib/application");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

class Database {
    static async getDataById (collection, id) {
        const collectionList = await this.connectDB(collection);

        const data = await collectionList.findOne({'_id' : ObjectId(id)});
        return data;
    }

    static async updateDataById (collection, id, data) {
        console.log("coleção: " + collection);
        const collectionList = await this.connectDB(collection);

        const result = await collectionList.updateOne({'_id' : ObjectId(id)}, { $set : data});
        return result;
    }

    static async insert (collection, data) {
        const collectionList = await this.connectDB(collection);
        const result = await collectionList.insertOne(data);
        console.log(result);
    }

    static async List (collection, params) {
        const collectionList = await this.connectDB(collection);

        let filters = new Object();

        if ( params.available ) {
            filters["userId"] = null;
        }

        
        const all_data = await collectionList.find(filters).toArray();
        let resultArray = [];

        const compareTitles = async (element) => {
            const movie = await this.getDataById("movies", element.movieId);

            if (movie.title.toLowerCase().includes(params.title.toLowerCase())) {
                console.log("O filme tem o nome buscado");
                return true;
            }

            return false;

        }

        if ( params.title ) {
            resultArray = all_data.filter(compareTitles);
        }

        return resultArray;
    }

    static async connectDB (collection) {
        await client.connect();
        const db = client.db("video_api");
        return db.collection(collection);
    }
}

module.exports = Database;