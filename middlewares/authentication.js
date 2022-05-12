const jwt = require("jsonwebtoken");

const secret = "S3nh4T0p";

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const tokendecoded = jwt.verify(token, secret);
        console.log(tokendecoded);
        next();
    } catch (error) {
        console.log("Unauthorized");
        return false;
    }
};

module.exports = authenticationMiddleware;