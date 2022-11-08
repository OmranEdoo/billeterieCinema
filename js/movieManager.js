const APIKEY = 'c169ee8e9d7cb87a5de4cda37c371d99';
let baseURL = 'https:api.themoviedb.org/3/';
let baseImageURL;
let logoSizes;
var movies = [];
var categories = {};

let getConfig = function() {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((data)=>{
        baseImageURL = data.images.secure_base_url;
        logoSizes = data.images.logo_sizes.slice(-1); // On choisit la dernière taille qui correspond à la taille la plus grande afin d'avoir la meilleure qualité puisque toute manière on va redimensionner l'image
        console.log('config fetched');
        foundCategories(baseImageURL, logoSizes);
    })
    .catch(function(err){
        alert(err);
    });
}

// create a dictionnary between ids and categories
let foundCategories = function (baseImageURL, logoSizes) {
    let url = ''.concat(baseURL, '/genre/movie/list?api_key=', APIKEY, '&language=en-US&page=1');
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{

        //console.log(data.genres);
        data.genres.forEach(element => {
            categories[element.id] = element.name;
        });

        foundMovies(baseImageURL, logoSizes)
    })
}

let foundDuration = function(baseImageURL, logoSizes, index) {
    let url = ''.concat(baseURL, '/movie/'+movies[index].id+'?api_key=', APIKEY, '&language=en-US&page=1');
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        movies[index].duration = data.runtime;
        if(movies.length > index+1){
            foundDuration(baseImageURL, logoSizes, index+1);
        } else {
            displayPosters();
        }
    })
}

let foundMovies = function (baseImageURL, logoSizes) {
    let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY, '&language=en-US&page=1');
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        console.log(data.results);

        for(let i = 0; i < 10; i++){
            let id = data.results[i].id;
            let name = data.results[i].original_title;
            let synopsis = data.results[i].overview;
            let category = categories[data.results[i].genre_ids[0]];
            let duration = 0;
            let picture = "url('".concat(baseImageURL.concat(logoSizes, data.results[i].poster_path), "')");
            let popularity = data.results[i].popularity;
            let movie = new Movie(id, name, synopsis, category, duration, picture, popularity);
            movies.push(movie);
        }

        foundDuration(baseImageURL, logoSizes, 0);
    })
}

document.addEventListener('DOMContentLoaded', getConfig);

let displayPosters = function(){

    let affiches = document.getElementsByClassName("affiche");

    //affiches scroll
    for(let i = 0; i<nbAffichesScroll; i++){

        let movie = movies[i];
        affiches[i].style.backgroundImage = movie.picture;
        affiches[i].style.backgroundSize = "cover";
        affiches[i+nbAffichesScroll].style.backgroundImage = movie.picture;
        affiches[i+nbAffichesScroll].style.backgroundSize = "cover";
    }

    //autres affiches
    for(let i = 0; i<nbAffiches; i++){
        let affiche = document.getElementById("affiche"+i);
        let titre = document.getElementById("titre"+i);
        let genre = document.getElementById("genre"+i);

        let movie = movies[i];
        console.log(movie);
        affiche.style.backgroundImage = movie.picture;
        affiche.style.backgroundSize = "cover";

        titre.innerText = movie.name;
        genre.innerText = movie.category;
    }

    movieRoomManager.chooseMovieRoom();////
}

