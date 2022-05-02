const Database = require("../utils/database");


class MoviesModel {
    static async returnMovie (userId, movieId) {

        let result = await Database.getDataById("movie_units", movieId);

        if ( !result ) {
            console.log("Id inválido");
            return false;
        }

        if ( result.userId != userId ) {
            console.log("Usuário não possui filme em seu nome");
            return false;
        }

        result.userId = null;
        result = await Database.updateDataById("movie_units", movieId, result);
        console.log("Return completo");
        return result;
    }

    static async rentMovie (userId, movieId) {

        let result = await Database.getDataById("movie_units", movieId);

        if ( !result ) {
            console.log("Id inválido");
            return false;
        }

        if ( result.userId != null ) {
            console.log("Filme já locado");
            return false;
        }

        result.userId = userId;
        result = await Database.updateDataById("movie_units", movieId, result);
        console.log("Update completo");
        return result;
        
    }

    static async listMovies (params) {
        const result = await Database.List("movie_units", params);
        return result;
    }
}

// MoviesModel.rentMovie(12342, "626735f81e2d4361b8c18e2b");

// MoviesModel.listMovies();


// MoviesModel.returnMovie("626735f81e2d4361b8c18e2b");

module.exports = MoviesModel;