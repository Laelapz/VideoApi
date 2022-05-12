const Model = require('../utils/model');

class MovieUnitsModel extends Model {
    constructor() {
        super('movie_units');
    }

    async returnMovie (userId, movieId) {

        let result = await this.findById(movieId);

        if ( !result ) {
            console.log("Id inválido");
            return false;
        }

        if ( result.userId != userId ) {
            console.log("Usuário não possui filme em seu nome");
            return false;
        }

        result.userId = null;
        result = await this.updateByID(movieId, result);
        return result;
    }

    async rentMovie (userId, movieId) {
        console.log(movieId);
        let result = await this.findById(movieId);

        if ( !result ) {
            console.log("Id inválido");
            return false;
        }

        if ( result.userId != null ) {
            console.log("Filme já locado");
            return false;
        }

        result.userId = userId;
        result = await this.updateByID(movieId, result);
        console.log("Update completo");
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