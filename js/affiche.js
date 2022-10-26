const largeurAffiche = 200; //px
const longueurAffiche = 220;
const marginLeft = 20;

let largeurEcran = $(window).width();

let nbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;

var primaryScroll = document.getElementsByClassName("scroll-element primary")[0];
var secondaryScroll = document.getElementsByClassName("scroll-element secondary")[0];

// création initiale des affiches
for(let i = 0; i<nbAffiches; i++){
    let afficheP = document.createElement('div');
    let afficheS = document.createElement('div');
    afficheP.className = "affiche";
    afficheS.className = "affiche";
    primaryScroll.appendChild(afficheP);
    secondaryScroll.appendChild(afficheS);
}

//resize listener