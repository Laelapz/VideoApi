const ApiError = require("../utils/apiError");
const jwt = require("jsonwebtoken");

const secret = "S3nh4T0p";

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const tokendecoded = jwt.verify(token, secret);
        req.userId = tokendecoded.id;
        next();
        
    } catch (error) {
        throw ApiError.unauthorized("Unauthorized", {});
    }
};

module.exports = authenticationMiddleware;