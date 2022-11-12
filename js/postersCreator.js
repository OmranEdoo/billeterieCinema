var largeurAffiche = 180; //px
var longueurAffiche = 240;
var marginLeft = 20;

let largeurEcran = $(window).width();

let nbAffichesScroll = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;

var primaryScroll = document.getElementsByClassName("scroll-element primary")[0];
var secondaryScroll = document.getElementsByClassName("scroll-element secondary")[0];

var home = document.getElementsByClassName("home")[0];
home.style.height = ""+$(document).height()+"px;";
console.log(""+$(document).height()+"px");

let nbAffiches;


// création initiale des affiches dans la bande de scroll
for(let i = 0; i<nbAffichesScroll; i++){
    let afficheP = document.createElement('div');
    let afficheS = document.createElement('div');
    afficheP.className = "affiche p"+i;
    afficheS.className = "affiche s"+i;
    primaryScroll.appendChild(afficheP);
    secondaryScroll.appendChild(afficheS);
}

if(window.attachEvent) {
    window.attachEvent('onresize', function() {

        largeurAffiche = document.getElementsByClassName("affiche")[0].width;

        largeurEcran = $(window).width();
        let newNbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;
        
        if (nbAffichesScroll < newNbAffiches){
            console.log("___new___"+newNbAffiches);
            for (let i = nbAffichesScroll; i < newNbAffiches; i++){
                let afficheP = document.createElement('div');
                let afficheS = document.createElement('div');
                afficheP.className = "affiche p"+i;
                afficheS.className = "affiche s"+i;
                primaryScroll.appendChild(afficheP);
                secondaryScroll.appendChild(afficheS);
            }
        }

        nbAffichesScroll = newNbAffiches;
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        
        largeurAffiche = document.getElementsByClassName("affiche")[0].width;

        largeurEcran = $(window).width();
        let newNbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;
        
        if (nbAffichesScroll < newNbAffiches){
            for (let i = nbAffichesScroll; i < newNbAffiches; i++){
                let afficheP = document.createElement('div');
                let afficheS = document.createElement('div');
                afficheP.className = "affiche p"+i;
                afficheS.className = "affiche s"+i;
                primaryScroll.appendChild(afficheP);
                secondaryScroll.appendChild(afficheS);
            }
        }

        nbAffichesScroll = newNbAffiches;
    }, true);
}
else {
    //The browser does not support Javascript event binding
    console.log("The browser does not support Javascript event binding")
}


var affichesContainer = document.getElementById("affichesContainer");

$.ajax({
    method: "POST",
    url: "php/dbConnector.php",
    data: {query: "SELECT COUNT(*) FROM movieroom"}
}).done(function(response) {
    nbAffiches = response;
    // création initiale des affiches du bas
    for(let i = 0; i<nbAffiches; i++){

        let bandeH = document.createElement('div');

        if (i%2 == 0){
            bandeH.className = "bandeH pair";
        } else {
            bandeH.className = "bandeH impair";
        }
        
        affichesContainer.appendChild(bandeH);

        let affiche = document.createElement('div');
        affiche.className = "affiche margin50";
        affiche.id = "affiche"+i;
        bandeH.appendChild(affiche);

        let bandeV = document.createElement('div');
        bandeV.className = "bandeV";
        bandeH.appendChild(bandeV);

        let genre = document.createElement('p');
        genre.className = "genre padDown0 margDown0 padLeft0 bold red";
        genre.id = "genre"+i;
        bandeV.appendChild(genre);

        let titre = document.createElement('p');
        titre.className = "titre padUp0 margUp0 padLeft0 bold bigText";
        titre.id = "titre"+i;
        bandeV.appendChild(titre);

        let test = document.createElement('div');
        test.className = "neon";
        test.innerText = "15h30";
        bandeH.appendChild(test);
    }

    new MovieManager();
});

let displayPosters = function(sessions){
        
    let affiches = document.getElementsByClassName("affiche");

    //affiches scroll
    for(let i = 0; i<nbAffichesScroll; i++){
        console.log("scroll");
        console.log(sessions[i].movieRoom);
        let movie = sessions[i].movie;
        
        affiches[i].style.backgroundImage = movie.picture;
        affiches[i].style.backgroundSize = "cover";
        affiches[i+nbAffichesScroll].style.backgroundImage = movie.picture;
        affiches[i+nbAffichesScroll].style.backgroundSize = "cover";
    }

    //autres affiches
    for(let i = 0; i<nbAffiches; i++){
        let affiche = document.getElementById("affiche"+i);
        let titre = document.getElementById("titre"+i);
        let genre = document.getElementById("genre"+i);

        let movie = sessions[i].movie;
        console.log("no scroll");
        console.log(sessions[i].movieRoom);
        affiche.style.backgroundImage = movie.picture;
        affiche.style.backgroundSize = "cover";

        titre.innerText = movie.name;
        genre.innerText = movie.category;
    }

    //movieRoomManager.chooseMovieRoom();////
}
