const { ObjectId } = require("mongodb");
const database = require("./database");

class Model {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  get collection() {
    return database.getCollection(this.collectionName);
  }

  async findById(id) {
    return await this.collection.findOne({ _id: ObjectId(id) });
  }

  async updateByID(id, data) {
    return await this.collection.updateOne({'_id' : ObjectId(id)}, { $set : data})
  }

  async insert (data) {
    const result = await this.collection.insertOne(data);
    return result;
  }
}

module.exports = Model;
