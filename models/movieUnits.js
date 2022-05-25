const Model = require('../utils/model');
const ApiError = require("../utils/apiError");

class MovieUnitsModel extends Model {
    constructor() {
        super('movie_units');
    }

    async returnMovie (userId, movieId) {

        let result = await this.findById(movieId);

        if ( !result ) {
            throw ApiError.badRequest("Id inválido");
        }

        if ( result.userId != userId ) {
            throw ApiError.forbidden("Usuário não possui filme em seu nome");
        }

        result.userId = null;
        result = await this.updateByID(movieId, result);
        result = true;
        return result;
    }

    async rentMovie (userId, movieId) {
        console.log(movieId);
        let result = await this.findById(movieId);

        if ( !result ) {
            throw ApiError.badRequest("Invalid Movie Unit");
        }

        if ( result.userId != null ) {
            throw ApiError.forbidden("Movie unavailable");
        }

        result.userId = userId;
        result = await this.updateByID(movieId, result);
        result = true;
        return result;
        
    }

    async listMovies ({available}) {
        const filter = {};

        if ( available ) {
            filter.userId = null;
        }
        
        const movieUnits = await this.collection.find(filter).toArray();
        return movieUnits;
    }
}


module.exports = new MovieUnitsModel();