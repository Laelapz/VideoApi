const express = require("express");
const authRouter = require("./services/auth");
const moviesRouter = require("./services/movies");
const Database = require("./utils/database");
const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.json());

server.listen(3000, () => {
    console.log("Live");
    Database.init();
});

server.use("/auth", authRouter);
server.use("/movies", moviesRouter);