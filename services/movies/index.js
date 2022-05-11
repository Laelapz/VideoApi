const express = require("express");
const router = express.Router();
const returnMovie = require("./returnMovie");

const routeMiddleware = require("../../middlewares/route");
const validationMiddleware = require("../../middlewares/validation");

router.post(
    "/:id",
    validationMiddleware({ paramsSchema: returnMovie.paramsSchema }),
    routeMiddleware(returnMovie.route)
);

module.exports = router;