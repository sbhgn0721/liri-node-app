//require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);


var movieName = ""

var nodeArgs = process.argv;

if (movieName === "") {
    movieName = "Mr. Nobody"
} else {

    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } else {
            movieName += nodeArgs[i];
        }
    }
}

var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

var axios = require("axios");

axios.get(queryUrl).then(
    function (response) {
        console.log("The following information is about the movie:");
        console.log("Title of the movie: " + movieName + "\nYear the movie came out: " + response.data.Year + "\nIMDB Rating of the movie: " + response.data.imdbRating
            + "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value + "\nCountry where the movie was produced: " + response.data.Country + "\nLanguage of the movie: " + response.data.Language + "\nPlot of the movie: " + response.data.Plot
            + "\nActors in the movie: " + response.data.Actors)

    }) 