const APIKEY = 'c169ee8e9d7cb87a5de4cda37c371d99';
let baseURL = 'https:api.themoviedb.org/3/';
let baseImageURL;
let logoSizes;
let imgPath;
/*
const largeurAffiche = 200; //px
const longueurAffiche = 220;
const marginLeft = 20;

let largeurEcran = $(window).width();

let nbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;*/

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
        foundMovies(baseImageURL, logoSizes)
    })
    .catch(function(err){
        alert(err);
    });
}

let foundMovies = function (baseImageURL, logoSizes) {
    let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY, '&language=en-US&page=1');
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        console.log(data.results);
        let affiches = document.getElementsByClassName("affiche");

        for(let i = 0; i<nbAffiches; i++){
            imgPath = data.results[i].poster_path;
            let imageURL = baseImageURL.concat(logoSizes, imgPath);
            affiches[i].style.backgroundImage = "url('".concat(imageURL, "')");
            affiches[i].style.backgroundSize = "cover";
            affiches[i+nbAffiches].style.backgroundImage = "url('".concat(imageURL, "')");
            affiches[i+nbAffiches].style.backgroundSize = "cover";
        }
    })
}

document.addEventListener('DOMContentLoaded', getConfig);