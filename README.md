# liri-node-app

## The video link for the demo of liri-node-app
* https://drive.google.com/file/d/1q994Acml7gZOPTKbwjhpRPkWMc4C8-OM/view

## The use of liri-node-app
* LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

* LIRI takes the following commands "spotify-this-song", "movie-this", "concert-this", "do-what-it-says"

* LIRI takes the userInput as the name of the song, the movie and the bands/artist, and call the APIs to search the information for that song, movie, or bands/artist.


* If the user doesn't put any userinput, the app will take some default userinput and display the related data.

## The packages that needed to make the liri-node-app function

* To retrieve the data that will power this app, the app need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. 
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * Axios will grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

## In addition to logging the data to the terminal/bash window, the data will be output to log.txt file.
