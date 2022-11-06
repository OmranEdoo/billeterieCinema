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

        nbAffiches = newNbAffiches;
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

let nbAffiches = 10;
var affichesContainer = document.getElementById("affichesContainer");

// création initiale des affiches du bas
for(let i = 0; i<nbAffiches; i++){

    let bandeH = document.createElement('div');
    bandeH.className = "bandeH";
    affichesContainer.appendChild(bandeH);

    let affiche = document.createElement('div');
    affiche.className = "affiche margin50";
    bandeH.appendChild(affiche);

    let bandeV = document.createElement('div');
    bandeV.className = "bandeV";
    bandeH.appendChild(bandeV);

    let genre = document.createElement('p');
    genre.className = "genre padDown0 margDown0 padLeft0 bold red";
    bandeV.appendChild(genre);

    let titre = document.createElement('p');
    titre.className = "titre padUp0 margUp0 padLeft0 bold bigText";
    bandeV.appendChild(titre);
}
