/*
 on creer une classe movieRoomeManager et movieManager avec les tableaux 
movies et movieRooms en attribut et la classe movieRoom se connect et creer le tableau dans le constructeur,
pareil pour movie.
les deux classes sont implémentées dans une autre classe (comme postersCreators par ex?) des le debut,
dabord movieRoomManager puis movieManager qui utilise le tableau movieRooms.
grace aux deux classes on instancie les sessions en classant tout comme decrit en bas. 
c'est selon les session que sont ensuite afficher les bails
*/

var movieRooms = [];

let chooseMovieRoom = function(){
    $.ajax({
        method: "POST",
        url: "php/dbConnector.php",
        data: {query: "SELECT * FROM movieroom"}
    }).done(function(response) {
        response.split("\n").forEach(line => {
            let elements = line.split(" ");
            let id = elements[0];
            let arrangement = elements[1]+" "+elements[2]+" "+elements[3];
            let roomNumber = elements[4];
            let numberOfSeats = elements[1]*(elements[2]+elements[3]);

            let movieRoom = MovieRoom(id, arrangement, roomNumber, numberOfSeats);
            movieRooms.push(movieRoom);
        });
    //classer les salles en fonction du nombre de places
    //pour chaque film on associe une salle en fonction de la popularité
    //et à partir du temps du film on creer les seances
    });
}