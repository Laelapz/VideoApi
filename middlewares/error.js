const errorMiddleware = async(res, err) => {
    const { status = 500, message = "Internal server error", data = {} } = err;

    return res.status(status).send({ message, data });
};

module.exports = errorMiddleware;