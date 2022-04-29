const Database = require("../utils/database");


class MoviesModel {
    static async returnMovie (movieId, movie) {

        let result = await Database.getDataById("movie_units", movieId);

        if ( result ) {
            movie.userId = null;
            result = await Database.updateDataById("movie_units", movieId, movie);
            return result;
        }

        console.log("Id inválido");
        return false;
    }

    static async rentMovie (userId, movieId, movie) {

        let result = await Database.getDataById("movie_units", movieId);

        if ( result ) {
            result.userId = userId;
            result = await Database.updateDataById("movie_units", movieId, movie);
            return result;
        }

        console.log("Id inválido");
        return false;
    }

    static async listMovies () {
        const result = await Database.List("movie_units", {"avaliable" : true, "title" : ""});
        console.log(result);
    }
}

// MoviesModel.rentMovie(12342, "626735f81e2d4361b8c18e2b", {
//     movieId : 1,
//     unit_number : 2,
//     userId : 3,
//     return_date : "11/08/1973"
// });

MoviesModel.listMovies();


// MoviesModel.returnMovie("626735f81e2d4361b8c18e2b", {
//         movieId : 1,
//         unit_number : 2,
//         userId : 3,
//         return_date : "11/08/1973"
// });

module.exports = MoviesModel;