const Joi = require("joi");
const MoviesController = require("../../controllers/movies");

const paramsSchema = Joi.object({
  userId: Joi.string().min(24).max(24).required(),
  movieId: Joi.string().min(24).max(24).required(),
  title: Joi.string(),
  avaliable: Joi.bool().required(),
  limit: Joi.number().integer().min(0).max(100),
  skip: Joi.number().integer().min(0)
});

const route = async (req, res) => {
  const result = await MoviesController.returnMovie(req.params.userId, req.params.movieId);
  return res.status(200).send({message : result});
};

module.exports = { route, paramsSchema };