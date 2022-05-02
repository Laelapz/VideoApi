const MoviesModel = require("../models/movies");

class MoviesController {
    static async returnMovie (userId, id) {
        const result = await MoviesModel.returnMovie(userId, id);
        return result;
    }

    static async rentMovie (userId, movieId) {
        const result = await MoviesModel.rentMovie(userId, movieId);
        return result;
    }

    static async listMovies (params) {
        const result = await MoviesModel.listMovies(params);
        console.log(result);
        return result;
    }
}

// MoviesController.rentMovie(12342, "6267041425674c76476debd4");
// MoviesController.returnMovie(12342, "6267041425674c76476debd4");
MoviesController.listMovies({
    avaliable : false,
    title: ""
})

module.exports = MoviesController;