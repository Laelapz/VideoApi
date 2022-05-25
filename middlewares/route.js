const errorMiddleware = require("./error");

const routeMiddleware = (route) => {
  return async (req, res, next) => {
    try {
      return await route(req, res, next);
    } catch (err) {
      return errorMiddleware(res, err);
    }
  };
};

module.exports = routeMiddleware;
