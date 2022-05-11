const express = require("express");
const router = express.Router();
const signin = require("./signin");
const signup = require("./signup");

const routeMiddleware = require("../../middlewares/route");
const validationMiddleware = require("../../middlewares/validation");

router.post(
    '/signin',
    validationMiddleware({bodySchema: signin.bodySchema}),
    routeMiddleware(signin.route)
);

router.post(
    '/signup',
    validationMiddleware({bodySchema: signup.bodySchema}),
    routeMiddleware(signup.route)
);

module.exports = router;