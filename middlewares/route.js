// const errorMiddleware = require("./error");

const routeMiddleware = (route) => {
  return async (req, res) => {
    try {
      return await route(req, res);
    } catch (err) {
    //   return errorMiddleware(res, err);
        return console.log("erro!: ", err);
    }
  };
};

module.exports = routeMiddleware;
