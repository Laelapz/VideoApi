const Database = require("../utils/database");


class UsersModel {

    static async createUser (data) {
        const id = await Database.insert("users", data);
        console.log(id);
        return id;
    }

    static async getById (id) {
        const result = await Database.getDataById("users", id);
        console.log(result);
        return result;
    }

}

const user = {
    name : "Nicolas", 
    email: "nicolassad@gmail.com", 
    password: "senha321"
};

// UsersModel.createUser(user);
// UsersModel.getById("6270322a14b1596c11337800");

module.exports = UsersModel;