const errorMiddleware = async(res, err) => {
    const { status = 500, message = "Internal server error" } = err;

    return res.status(status).send({ message });
};

module.exports = errorMiddleware;