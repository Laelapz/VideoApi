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
      console.log("Schema not valid: "+error);
    }
  };
};

module.exports = validationMiddleware;