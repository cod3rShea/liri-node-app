// require
require("dotenv").config();
let axios = require('axios');
// vars
let keys = require("./keys.js");
let spotifyRequire = require('node-spotify-api');
let spotify = new spotifyRequire(keys.spotify);
let fs = require('fs');

// User Arguments
var command = process.argv[2];
var userValue = process.argv.slice(3).join(' ');
console.log(userValue);

// possible commands
switch (command) {
    case "concert-this":
        concertThis(userValue);
        break;
    case "spotify-this-song":
        spotifyThisSong(userValue);
        break;
    case "movie-this":
        movieThis(userValue);
        break;
    case "do-what-it-says":
        doWhatItSays(userValue);
        break;
}





// concert

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + userValue + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // handle success
            // Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            const data = response.data;

            for (let i = 0; i < data.length; i++) {
                let event = data[i];
                console.log("\n" + event.venue.name);
                console.log(event.venue.city);
                console.log(event.datetime + "\n");
            }
        })
        .catch(function (error) {
            // handle error
            console.error("There is no band name");
        })
}



// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

function spotifyThisSong() {
    spotify
        .search({ type: 'track', query: userValue  })
        .then(function (response) {
            console.log(response.tracks.items[0]);
            let data = response.tracks.items;

            for(let i =0; i < data.length; i++) {
                console.log("\n" + data[i].album.name);
            }

        })
        .catch(function (err) {
            console.log(err);
        });
}

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

function movieThis() {

}

function doWhatItSays() {


}