const APIKEY = 'c169ee8e9d7cb87a5de4cda37c371d99';
let baseURL = 'https:api.themoviedb.org/3/';
let baseImageURL;
let logoSizes;
var categories = {};

class MovieManager {
    constructor() {
        console.log("__test__");
        MovieManager.getConfig()
    }

    static getConfig() {
        let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
        fetch(url)
        .then((result)=>{
            return result.json();
        })
        .then((data)=>{
            baseImageURL = data.images.secure_base_url;
            logoSizes = data.images.logo_sizes.slice(-1); // On choisit la dernière taille qui correspond à la taille la plus grande afin d'avoir la meilleure qualité puisque toute manière on va redimensionner l'image
            MovieManager.foundCategories();
        })
        .catch(function(err){
            alert(err);
        });
    }
    
    // create a dictionnary between ids and categories
    static foundCategories() {
        let url = ''.concat(baseURL, '/genre/movie/list?api_key=', APIKEY, '&language=en-US&page=1');
        fetch(url)
        .then(result=>result.json())
        .then((data)=>{
    
            data.genres.forEach(element => {
                categories[element.id] = element.name;
            });
    
            MovieManager.foundMovies()
        })
    }
    
    static foundDuration(movies, ids, names, synopsiss, categorys, i) {
        let url = ''.concat(baseURL, '/movie/'+ids[i]+'?api_key=', APIKEY, '&language=en-US&page=1');
        fetch(url)
        .then(result=>result.json())
        .then((data)=>{
            let duration = data.runtime;
            let picture = "url('".concat(baseImageURL.concat(logoSizes, data.poster_path), "')");
            let popularity = data.popularity;
            let movie = new Movie(ids[i], names[i], synopsiss[i], categorys[i], duration, picture, popularity);
            movies.push(movie);

            if (i < 9)
                MovieManager.foundDuration(movies, ids, names, synopsiss, categorys, i+1);
            else
                MovieManager.fillTableMovie(movies, 0);
        })
    }

    static fillTableMovie(movies, i) {
        var movie = movies[i];

        var id = movie.id;
        var name = movie.name;
        var synopsis = movie.synopsis;
        var category = movie.category;
        var duration = movie.duration;
        var picture = movie.picture.replace("url('", "").replace("')", "");
        var popularity = movie.popularity;

        $.ajax({
            method: "POST",
            url: "php/moviePost.php",
            data: {
                id: id,
                name: name,
                synopsis: synopsis,
                category: category,
                duration: duration,
                picture: picture,
                popularity: popularity
            }
        }).done(function() {
            if (i < movies.length - 1)
                MovieManager.fillTableMovie(movies, i+1);
            else
                new MovieRoomManager(movies);
        });
    }
    
    static foundMovies() {
        let movies = [];

        let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY, '&language=en-US&page=1');
        fetch(url)
        .then(result=>result.json())
        .then((data)=>{

            let ids = [];
            let names = [];
            let synopsiss = [];
            let categorys = [];
    
            for(let i = 0; i < 10; i++){
                ids.push(data.results[i].id);
                names.push(data.results[i].original_title);
                synopsiss.push(data.results[i].overview);
                categorys.push(categories[data.results[i].genre_ids[0]]);
            }

            MovieManager.foundDuration(movies, ids, names, synopsiss, categorys, 0); 
        })
    }
}