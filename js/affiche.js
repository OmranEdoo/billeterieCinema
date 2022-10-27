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
    afficheP.className = "affiche p"+i;
    afficheS.className = "affiche s"+i;
    primaryScroll.appendChild(afficheP);
    secondaryScroll.appendChild(afficheS);
}

if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        largeurEcran = $(window).width();
        let newNbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;
        
        if (nbAffiches > newNbAffiches){
            let afficheP = document.getElementsByClassName("affiche p"+nbAffiches-1)[0];
            let afficheS = document.getElementsByClassName("affiche s"+nbAffiches-1)[0];
            afficheP.parentNode.removeChild(afficheP);
            afficheS.parentNode.removeChild(afficheS);
        } else if (nbAffiches < newNbAffiches){
            let afficheP = document.createElement('div');
            let afficheS = document.createElement('div');
            afficheP.className = "affiche p"+newNbAffiches-1;
            afficheS.className = "affiche s"+newNbAffiches-1;
            primaryScroll.appendChild(afficheP);
            secondaryScroll.appendChild(afficheS);
        }

        nbAffiches = newNbAffiches;
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        largeurEcran = $(window).width();
        let newNbAffiches = parseInt(largeurEcran/(largeurAffiche+marginLeft))+1;
        
        if (nbAffiches > newNbAffiches){
            let afficheP = document.getElementsByClassName("affiche p"+nbAffiches-1)[0];
            let afficheS = document.getElementsByClassName("affiche s"+nbAffiches-1)[0];
            afficheP.parentNode.removeChild(afficheP);
            afficheS.parentNode.removeChild(afficheS);
        } else if (nbAffiches < newNbAffiches){
            let afficheP = document.createElement('div');
            let afficheS = document.createElement('div');
            afficheP.className = "affiche p"+newNbAffiches-1;
            afficheS.className = "affiche s"+newNbAffiches-1;
            primaryScroll.appendChild(afficheP);
            secondaryScroll.appendChild(afficheS);
        }

        nbAffiches = newNbAffiches;
    }, true);
}
else {
    //The browser does not support Javascript event binding
    console.log("The browser does not support Javascript event binding")
}