const Joi = require("joi");
const authController = require("../../controllers/auth");

const bodySchema = Joi.object({  
  email: Joi.string().max(30).required(),
  password: Joi.string().min(8).max(20).required()
});

const route = async (req, res) => {
    const result = await authController.signin(req.body);
    return res.status(200).send({ message : result})
};

module.exports = { route, bodySchema };