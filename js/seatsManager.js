class SeatsManager {
    constructor(sessions) {

        SeatsManager.getNumberOfSeats(sessions);
        //SeatsManager.getSeatsData(sessions, seats, 0);
    }

    static getNumberOfSeats(sessions){
        var seats = [];

        $.ajax({
            method: "POST",
            url: "php/dbGetter.php",
            data: {query: "SELECT COUNT(*) FROM seats;"}
        }).done(function(idMax) {
            console.log("vvv "+typeof(idMax));
            console.log("vvv "+idMax);
            if (parseInt(idMax) > 0){
                console.log("vvv0");
                
                if (idMax < sessions.length - 1){
                    SeatsManager.getSeatsData(sessions, seats, idMax+1);
                }
                else {
                    displayPosters(sessions);
                }
            }
            else{
                console.log("vvv1");
                SeatsManager.getSeatsData(sessions, seats, 0);
            }
        });
    }

    static fillTableSeats(sessions, seats, i) {

        var seat = seats[i];

        var id = seat.id;
        //console.log("e "+id);
        var sessionId = seat.sessionId;
        var x = seat.x;
        var y = seat.y;
        var state = seat.state;

        $.ajax({
            method: "POST",
            url: "php/seatsPost.php",
            data: {
                id: id,
                sessionId: sessionId,
                x: x,
                y: y,
                state: state
            }
        }).done(function() {
            if (i < seats.length - 1)
                SeatsManager.fillTableSeats(sessions, seats, i+1);
            else
                displayPosters(sessions);
        });
    }

    static getSeatsData(sessions, seats, i){

        let session;
        console.log("vvv2");
        session = sessions[i];
        
        $.ajax({
            method: "POST",
            url: "php/dbGetter.php",
            data: {query: "SELECT * FROM movieroom WHERE id='"+session.movieRoomId+"';"}
        }).done(function(response) {
            let responseSplit = response.split(" ");
            let arrangement = responseSplit[1];
            let arrangementSplit = arrangement.split("-");
            let long = parseInt(arrangementSplit[0]);
            let larg = 2*parseInt(arrangementSplit[1])+parseInt(arrangementSplit[2]);

            for(let k = 0; k<long; k++){
                for(let l = 0; l<larg; l++){
                    let seat;
                        
                    if (seats.length)
                        seat = new Seats(seats[seats.length-1].id+1, session.id, k, l, "free");
                    else
                        seat = new Seats(0, session.id, k, l, "free");
                        
                    seats.push(seat);
                }
            }

            if (i < sessions.length - 1)
                SeatsManager.getSeatsData(sessions, seats, i+1)
            else
                SeatsManager.fillTableSeats(sessions, seats, 0);
        });
    }
}
