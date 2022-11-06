const APIKEY = 'c169ee8e9d7cb87a5de4cda37c371d99';
let baseURL = 'https:api.themoviedb.org/3/';
let baseImageURL;
let logoSizes;
let imgPath;

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

        //affiches scroll
        for(let i = 0; i<nbAffichesScroll; i++){
            imgPath = data.results[i].poster_path;
            let imageURL = baseImageURL.concat(logoSizes, imgPath);
            affiches[i].style.backgroundImage = "url('".concat(imageURL, "')");
            affiches[i].style.backgroundSize = "cover";
            affiches[i+nbAffichesScroll].style.backgroundImage = "url('".concat(imageURL, "')");
            affiches[i+nbAffichesScroll].style.backgroundSize = "cover";
        }

        let titres = document.getElementsByClassName("titre");

        //autres affiches
        for(let i = 0; i<nbAffiches; i++){
            imgPath = data.results[i].poster_path;
            let imageURL = baseImageURL.concat(logoSizes, imgPath);
            affiches[i+nbAffichesScroll].style.backgroundImage = "url('".concat(imageURL, "')");
            affiches[i+nbAffichesScroll].style.backgroundSize = "cover";

            titres[i].innerText = data.results[i].original_title;
            foundGenre(data.results[i].genre_ids[0], i);
        }
    })
}

let foundGenre = function (id, i) {
    let url = ''.concat(baseURL, '/genre/movie/list?api_key=', APIKEY, '&language=en-US&page=1');
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{

        let genres = document.getElementsByClassName("genre");

        //console.log(data.genres);
        data.genres.forEach(element => {
            
            if(element.id == id){
                let genre = element.name;
                genres[i].innerText = genre;
            }
        });
    })
}

document.addEventListener('DOMContentLoaded', getConfig);