class SessionManager {
    constructor(movies, movieRooms) {
        this.movies = movies;
        this.movieRooms = movieRooms;

        var nbMovies = this.movies.length;

        SessionManager.sortMovies(0, nbMovies-1, this.movies);
        SessionManager.sortMovieRooms(0, nbMovies-1, this.movieRooms);
        SessionManager.fillSessions(movies, movieRooms);
    }

    static sortMovies(debut, fin, movies) {
        if (debut < fin) {
            var indice_pivot = SessionManager.partitionMovies(debut, fin, movies);
            SessionManager.sortMovies(debut, indice_pivot-1, movies);
            SessionManager.sortMovies(indice_pivot+1, fin, movies);
        }
    }

    static sortMovieRooms(debut, fin, movieRooms) {
        if (debut < fin) {
            var indice_pivot = SessionManager.partitionMovieRooms(debut, fin, movieRooms);
            SessionManager.sortMovieRooms(debut, indice_pivot-1, movieRooms);
            SessionManager.sortMovieRooms(indice_pivot+1, fin, movieRooms);
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

    static partitionMovieRooms(debut, fin, movieRooms) {
        var temp;
        var valeur_pivot = movieRooms[debut].numberOfSeats, d = debut+1, f = fin;
        while(d < f) {
            while(d < f && movieRooms[f].numberOfSeats >= valeur_pivot) f--;
            while(d < f && movieRooms[d].numberOfSeats <= valeur_pivot) d++;
            temp = movieRooms[d].numberOfSeats;
            movieRooms[d].numberOfSeats = movieRooms[f].numberOfSeats;
            movieRooms[f].numberOfSeats = temp;
        }

        if(movieRooms[d].numberOfSeats > valeur_pivot) d--;
        movieRooms[debut].numberOfSeats = movieRooms[d].numberOfSeats;
        movieRooms[d].numberOfSeats = valeur_pivot;
        return d;
    }

    static fillTableSession(session) {
        $.ajax({
            method: "POST",
            url: "php/dbSetter.php",
            data: {query: "DROP DATABASE session; INSERT INTO session VALUES ('"+session.movie.id+"','"+
                                                        session.movieRoom.id+"', '"+
                                                        session.hours+"')"}
        }).done(function(response) {
            console.log(response);
        });
    }

    static fillSessions(movies, movieRooms){
        var hours;
        let beginHour = 555// first session at 9h15 => 9*60+15 minutes
        let endHour = 1440; // the last session can finish at midnight maximum

        let sessions = [];
        var nbMovies = movies.length;

        for(let i = 0; i < nbMovies; i++){
            hours = [];
            let movie = movies[i];
            let movieRoom = movieRooms[i];
            let duration = movie.duration;
            let interval = duration+20+10-(duration+20)%5;
            let nbSessions = parseInt((endHour-beginHour)/interval);
            for(let j = 0; j < nbSessions; j++){
                hours.push(beginHour+j*interval);
            }

            let session = new Session(movie, movieRoom, hours);
            sessions.push(session);
            SessionManager.fillTableSession(session);
        }

        console.log("sessions");
        console.log(sessions);
        displayPosters(sessions);
    }
}