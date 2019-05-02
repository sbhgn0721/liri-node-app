
//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

//Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var fs = require("axios");

var moment = require("moment");

//use axios package for the bands in town, spotify and omdb apis
var axios = require("axios");

//userCommand for "concert-this, spotify-this-song, movie-this, do-what-it-says"
var userCommand = process.argv[2];

//userInput for the name of the artist/band, song, movie
var userInput = process.argv.slice(3).join(" ");

//Make liri.js take one of the following commands:
function liriBot(userCommand, userInput) {
    if (userCommand = "concert-this") {
        concertThis(userInput);
    } else if (userCommand = "spotify-this-song") {
        spotifyThisSong(userInput);
    } else if (userCommand = "movie-this") {
        movieThis(userInput);
    } else if (userCommand = "do-what-it-says") {
        getRandom();
    } else {
        console.log("Please put one of the commands: 'concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says' and the name of the artist/band, song and movie!");
    }

}

//concert-this artist/band name part
function concertThis(artist) {
    var artist = userInput;
    var queryURLForBandsInTownAPI = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    if (artist === "") {
        console.log("You haven't put the name of the artist or band.")
    } else {
        axios.get(queryURLForBandsInTownAPI).then(
            function (bands) {
                console.log("The following information is about the band/artist:");
                console.log(bands);
                //console.log("Name of the artist/band: " + artist + "\nName of the venue: " + bands.data[0].venue.name + "\nVenue location: " + bands.data[0].venue.city + "\nDate of the Even: " + moment(bands.data[0].datetime).format("MM-DD-YYYY"));
            }
        )


    }
}


//movie-this movieName part
function movieThis(movieName) {
    var movieName = userInput;
    var queryUrlForOMDBAPI = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    if (movieName === "") {
        movieName = "Mr. Nobody"
    } else {
        axios.get(queryUrlForOMDBAPI).then(
            function (response) {
                console.log("The following information is about the movie:");
                console.log("Title of the movie: " + movieName + "\nYear the movie came out: " + response.data.Year + "\nIMDB Rating of the movie: " + response.data.imdbRating
                    + "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage of the movie: " + response.data.Language + "\nPlot of the movie: " + response.data.Plot
                    + "\nActors in the movie: " + response.data.Actors);
            })
    }
}


//do-what-it-says-part
function getRandom() {
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        } else {
            console.log(data);
            
            var randomData = data.split(",");
            liriBot(randomData[0], randomData[1]);
        }
    })
}

liriBot(userCommand, userInput);




