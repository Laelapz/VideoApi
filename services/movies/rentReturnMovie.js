const Joi = require("joi");
const MoviesController = require("../../controllers/movies");

const paramsSchema = Joi.object({
    "id": Joi.string().min(24).max(24).required()
});

const bodySchema = Joi.object({
    "action": Joi.string().required()
})

const route = async (req, res) => {

    let result = "opção inválida";

    if ( req.body.action == "rent" ) {
        result = MoviesController.rentMovie()
    }

    if ( req.body.action == "return" ) {
        result = await MoviesController.returnMovie();
    }

  return res.status(200).send({message : result});
};

module.exports = { route, bodySchema, paramsSchema };