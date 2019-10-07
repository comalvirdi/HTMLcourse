var movies = [
    {title: "Frozen", hasWatched: false, rating: 5},
    {title: 'Freaky Friday', hasWatched: true, rating: 5}
];

movies.forEach(function(movie){
    var result = "You have ";
    if (movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not watched "
    }
    result += "\"" + movie.title + "\"" + " - ";
    result += movie.rating + " stars";
    console.log(result)
})