const Joi = require("joi");
const MoviesController = require("../../controllers/movies");

const paramsSchema = Joi.object({
    title: Joi.string().max(20),
    avaliable: Joi.bool(),
    limit: Joi.number().integer().max(50),
    skip: Joi.number().integer()
});

const route = async (req, res) => {
    const result =  await MoviesController.listMovies(req.query);
    res.status(200).send({ movies: result });
};

module.exports = { route, paramsSchema };