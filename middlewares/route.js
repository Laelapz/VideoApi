const errorMiddleware = require("./error");

const routeMiddleware = (route) => {
  return async (req, res) => {
    try {
      return await route(req, res);
    } catch (err) {
      console.log("Chegou aqui");
      return errorMiddleware(res, err);
    }
  };
};

module.exports = routeMiddleware;
