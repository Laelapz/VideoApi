const MoviesModel = require("../models/users");

class UsersController {
    async createUser (data) {
        const id = await MoviesModel.createUser(data);
        return id;
    }

    async getByEmail (email) {
        const user = await MoviesModel.getByEmail(email);
        return user;
    }
}

module.exports = new UsersController();