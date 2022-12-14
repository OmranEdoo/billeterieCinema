class SessionManager {
    constructor(movies, movieRooms) {

        var nbMovies = movies.length;
        var nbMovieRooms = movieRooms.length;

        console.log(nbMovies);
        console.log(nbMovieRooms);

        SessionManager.sortMovies(0, nbMovies-1, movies);

        SessionManager.fillSessions(movies, movieRooms);
    }

    static sortMovies(debut, fin, movies) {
        if (debut < fin) {
            var indice_pivot = SessionManager.partitionMovies(debut, fin, movies);
            SessionManager.sortMovies(debut, indice_pivot-1, movies);
            SessionManager.sortMovies(indice_pivot+1, fin, movies);
        }
    }
     
    static partitionMovies(debut, fin, movies) {
        var temp;
        var valeur_pivot = movies[debut].duration, d = debut+1, f = fin;
        while(d < f) {
            while(d < f && movies[f].duration >= valeur_pivot) f--;
            while(d < f && movies[d].duration <= valeur_pivot) d++;
            temp = movies[d].duration;
            movies[d].duration = movies[f].duration;
            movies[f].duration = temp;
        }

        if(movies[d].duration > valeur_pivot) d--;
        movies[debut].duration = movies[d].duration;
        movies[d].duration = valeur_pivot;
        return d;
    }

    static fillTableSession(sessions, i){
        console.log("test "+i);

        var session = sessions[i];
        var id = session.id;
        var idMovie = session.movie.id;
        var idMovieRoom = session.movieRoom.id;
        var hour = session.hour;

        $.ajax({
            method: "POST",
            url: "php/sessionPost.php",
            data: {
                id: id,
                idMovie: idMovie,    
                idMovieRoom: idMovieRoom,
                hour: hour.toString()
            }
        }).done(function() {
            if (i < sessions.length - 1)
                SessionManager.fillTableSession(sessions, i+1);
            else
                new SeatsManager(sessions); 
        });
    }

    static fillSessions(movies, movieRooms){

        let beginHour = 555// first session at 9h15 => 9*60+15 minutes
        let endHour = 1440; // the last session can finish at midnight maximum

        let sessions = [];
        var nbMovies = movies.length;

        for(let i = 0; i < nbMovies; i++){
            let movie = movies[i];
            let movieRoom = movieRooms[i];
            let duration = movie.duration;
            let interval = duration+20+10-(duration+20)%5;
            let nbSessions = parseInt((endHour-beginHour)/interval);

            for(let j = 0; j < nbSessions; j++){
                let session = new Session(i*nbMovies + j, movie, movieRoom, beginHour+j*interval);
                sessions.push(session);
            }
        }

        SessionManager.fillTableSession(sessions, 0);
    }
}