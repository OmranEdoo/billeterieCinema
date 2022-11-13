class MovieRoomManager {
    constructor(movies) {
        MovieRoomManager.chooseMovieRoom(movies);
    }

    static chooseMovieRoom(movies){
        let movieRooms = [];

        $.ajax({
            method: "POST",
            url: "php/dbGetter.php",
            data: {query: "SELECT * FROM movieroom"}
        }).done(function(response) {
            response.split("\n").forEach(line => {
                let elements = line.split(" ");
                let id = elements[0];
                let arrangement = elements[1]+" "+elements[2]+" "+elements[3];
                let roomNumber = elements[4];
                let numberOfSeats = elements[1]*(elements[2]+elements[3]);
    
                let movieRoom = new MovieRoom(id, arrangement, roomNumber, numberOfSeats);
                movieRooms.push(movieRoom);
            });
        
            new SessionManager(movies, movieRooms);
        });
    }
}

