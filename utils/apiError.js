class ApiError extends Error {
    constructor (status, message, data) {
        super(message);
        this.status = status;
        this.data = data;
    }

    static badRequest ( message, data ) {
        return new ApiError(400, message, data);
    }

    static unauthorized ( message, data ) {
        return new ApiError(401, message, data);
    }

    static forbidden ( message, data ) {
        return new ApiError(403, message, data);
    }

    static notFound ( message, data ) {
        return new ApiError(404, message, data);
    }
};

module.exports = ApiError;