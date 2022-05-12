const ApiError = require("../utils/apiError");

const validate = (schema, data) => {
  const { error, value } = schema.validate(data);

  if (error) {
    throw error;
  }

  return value;
};

const validationMiddleware = ({ bodySchema, paramsSchema }) => {
  return (req, res, next) => {
    try {
      if (bodySchema) {
        req.body = validate(bodySchema, req.body);
      }

      if (paramsSchema) {
        req.params = validate(paramsSchema, req.params);
      }

      return next();
    } catch (error) {
      throw ApiError.badRequest("Schemma not valid", {});

    }
  };
};

module.exports = validationMiddleware;
