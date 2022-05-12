const MoviesModel = require("../models/movies");
const MovieUnitsModel = require("../models/movieUnits");

class MoviesController {
    async returnMovie (userId, id) {
        const result = await MovieUnitsModel.returnMovie(userId, id);
        return result;
    }

    async rentMovie (userId, movieId) {
        const result = await MovieUnitsModel.rentMovie(userId, movieId);
        return result;
    }

    async listMovies (params) {
        const availableMovies = await MovieUnitsModel.listMovies(params);
        const availableMoviesIds = availableMovies.map((movie) => movie.movieId);
        const result = await MoviesModel.listMoviesByTitle(availableMoviesIds, params.title);
        return result;
    }
}

module.exports = new MoviesController();