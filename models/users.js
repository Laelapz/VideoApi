const Model = require("../utils/model");


class UsersModel extends Model{

    constructor() {
        super('users');
    }

    async createUser (data) {
        const id = await this.insert(data);
        return id;
    }

    async getByEmail (email) {
        const result = await this.collection.findOne({'email' : email});
        return result;
    }

}

module.exports = new UsersModel();