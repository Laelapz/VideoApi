const UsersController = require("./users");
const ApiError = require("../utils/apiError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const secret = "S3nh4T0p";

class AuthController {
    async signup ({name, email, password}) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const id = await UsersController.createUser({
            name,
            email,
            password: hash
        });

        return id;
    }

    async signin ({ email, password}) {
        const result = await UsersController.getByEmail(email);

        if ( !bcryptjs.compareSync( password, result.password ) ){
            throw ApiError.badRequest("Email ou senha incorreta");
        }

        const token = jwt.sign({ id: result._id, email: result.email }, secret);

        return token;
    }
}

module.exports = new AuthController();