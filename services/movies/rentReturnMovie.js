const Joi = require("joi");
const jwt = require("jsonwebtoken");
const MoviesController = require("../../controllers/movies");


const paramsSchema = Joi.object({
    "id": Joi.string().min(24).max(24).required()
});

const bodySchema = Joi.object({
    "action": Joi.string().required()
})

const route = async (req, res) => {

    let result = "opção inválida";
    const decodedToken = jwt.verify(req.headers.authorization, "S3nh4T0p");

    if ( req.body.action == "rent" ) {
        result = await MoviesController.rentMovie(decodedToken.id, req.params.id);
    }

    if ( req.body.action == "return" ) {
        result = await MoviesController.returnMovie(decodedToken.id, req.params.id);
    }

  return res.status(200).send({message : result});
};

module.exports = { route, bodySchema, paramsSchema };