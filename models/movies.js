const Model = require("../utils/model");

class MoviesModel extends Model{
    constructor() {
        super("movies");
    }

    async listMoviesByTitle(ids, title) {
        const filter = { _id : { $in : ids } };
        if ( title ) {
            filter.title = { '$regex' : title, '$options' : 'i'};
        }
        const movies = await this.collection.find(filter).toArray();
        return movies;
    }
}

module.exports = new MoviesModel();