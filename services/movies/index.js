const express = require("express");
const router = express.Router();
const rentReturnMovie = require("./rentReturnMovie");
const listMovies = require("./listMovies");

const routeMiddleware = require("../../middlewares/route");
const validationMiddleware = require("../../middlewares/validation");
const authenticationMiddleware = require("../../middlewares/authentication");

router.patch(
    "/:id",
    routeMiddleware(authenticationMiddleware),
    routeMiddleware(validationMiddleware({ bodySchema: rentReturnMovie.bodySchema, paramsSchema: rentReturnMovie.paramsSchema })),
    routeMiddleware(rentReturnMovie.route)
);

router.get(
    "/",
    routeMiddleware(authenticationMiddleware),
    routeMiddleware(validationMiddleware({paramsSchema: listMovies.paramsSchema})),
    routeMiddleware(listMovies.route)
);

module.exports = router;