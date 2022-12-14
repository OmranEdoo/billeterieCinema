class MovieRoomManager {
    constructor(movies) {
        console.log("test__");

        MovieRoomManager.createMovieRoom(movies);
    }


    static fillTableMovieRoom(movies, movieRooms, i){
        var movieRoom = movieRooms[i];

        var id = movieRoom.id;
        var seatsArrangement = movieRoom.arrangement;
        var roomNumber = movieRoom.roomNumber;
        var numberOfSeats = movieRoom.numberOfSeats;

        $.ajax({
            method: "POST",
            url: "php/movieRoomPost.php",
            data: {
                id: id,
                seatsArrangement: seatsArrangement,    
                roomNumber: roomNumber,
                numberOfSeats: numberOfSeats
            }
        }).done(function() {
            console.log("test__");
            if (i < movieRooms.length - 1)
                MovieRoomManager.fillTableMovieRoom(movies, movieRooms, i+1);
            else
                new SessionManager(movies, movieRooms);
        });
    }


    static createMovieRoom(movies){
        var seatsArrangements = ["21-2-15", "22-2-17", "20-2-15", "22-2-17", "20-2-15", "23-3-15", "32-4-20", "21-3-15", "25-3-19", "28-4-19"];
        let movieRooms = [];

        for(let i = 0; i < seatsArrangements.length; i++){
            let seatArrangement = seatsArrangements[i];
            let elements = seatArrangement.split(" ");
            let numberOfSeats = parseInt(elements[0])*(parseInt(elements[1])+parseInt(elements[2]));
            console.log("______"+typeof(numberOfSeats));
            let movieRoom = new MovieRoom(i, seatArrangement, i, numberOfSeats);
            movieRooms.push(movieRoom);
        }

        MovieRoomManager.fillTableMovieRoom(movies, movieRooms, 0);
    }
}

