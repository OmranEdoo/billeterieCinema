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
        logoSizes = data.images.logo_sizes;
        console.log('config fetched');
        runSearch('jaws', baseImageURL, logoSizes)
    })
    .catch(function(err){
        alert(err);
    });
}

let runSearch = function (keyword, baseImageURL, logoSizes) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        console.log("runsearch fetched", data);
        imgPath = data.page.result[0].poster_path;
        console.log(imgPath);
        let affiches = document.getElementsByClassName("affiche");
        let imageURL = baseImageURL.concat(logoSizes[0], "/", imgPath);
        console.log(imageURL);

        affiches.forEach(affiche => {
            affiche.style.backgroundImage = "url('".concat(imageURL, "')");
        });
    })
}

document.addEventListener('DOMContentLoaded', getConfig);