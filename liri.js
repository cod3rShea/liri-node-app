// require
require("dotenv").config();

// vars
let keys = require("./keys.js");
let spotifyRequire = require('node-spotify-api');
let spotify = new spotifyRequire(keys.spotify);
let fs = require('fs');

var command = process.argv[2]; 

// 
switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
}