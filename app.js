/**
 * le jeu du pierre, feuille, ciseaux classique contre l'ordinateur
 */
function game() {
    
    // déclaration des variables
    var pierre = document.querySelector('#pierre');
    var feuille = document.querySelector('#feuille');
    var ciseaux = document.querySelector('#ciseaux');
    
    // l'image du joueur
    var Pimg = document.querySelector('#Pimg');
    // l'image de l'ordi
    var Cimg = document.querySelector('#Cimg');
    // le bouton reset
    var reset = document.querySelector("#reset");

    var PscoreSpan = document.querySelector('#Pscore');
    var CscoreSpan = document.querySelector('#Cscore');
    // initialisation des score à zero
    var pScore = 0;
    var cScore = 0;

    var images_option = ['pierre','feuille','ciseaux'];

    // les fonctions d'affichage du choix utilisateur et ordinateur

    // choix utilisateur, i c'est pour le tableau,
    // il choisir la valeur qu'il va prendre pour récupérer la bonne image 
    
    var Pchoice = function(i){
        Pimg.src = 'img/'+images_option[i]+'.jpg';
        Pimg.value = images_option[i];
        compareHands();
    }
    //choix Ordinateur
    var Cchoice = function(i){
        Cimg.src = 'img/'+images_option[i]+'.jpg';
        Cimg.value = images_option[i];
    }

    // les evenements du clic pour la selection de l'utilisateur
    pierre.addEventListener('click', function(){
        //choisi pour l'ordi une des trois possibilités
        // renvoie le plus grand entier qui est inférieur ou égal à un nombre x
        Cchoice(Math.floor(Math.random() * 3));
        // utilisatation de la fonction Pchoice pour dire quel
        // valeur à séléctionné le joueur
        Pchoice(0);
    })

    feuille.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 3));
        Pchoice(1);
    })
    ciseaux.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 3));
        Pchoice(2);
    })

    // compare les mains des deux pour calculer qui gagne
    var compareHands = function(){
        // si le joueur à choisi pierre
        if(Pimg.value == 'pierre'){
            // si l'ordi a choisi la feuille
            if(Cimg.value == 'feuille'){
                // ordi +1 point
                cScore += 1;
            }
            // sinon si l'ordia choisi ciseaux
            else if(Cimg.value == 'ciseaux'){
                // joueur +1 point
                pScore += 1;
            }
            // sinon égalité donc rien ne se passe
            else if(Cimg.value == 'pierre'){
            }
        }
        // même logique pour les autres choix
        else if(Pimg.value == 'ciseaux'){
            if(Cimg.value == 'pierre'){
                cScore += 1;
            }
            else if(Cimg.value == 'feuille'){
                pScore += 1;
            }
            else if(Cimg.value == 'ciseaux'){
                
            }
        }
        if(Pimg.value == 'feuille'){
            if(Cimg.value == 'ciseaux'){
                cScore += 1;
            }
            else if(Cimg.value == 'pierre'){
                pScore += 1;
            }
            else if(Cimg.value == 'feuille'){
                
            }
        }
        // recupère et afficher les scores dans les span
        function affichageScore() {
            PscoreSpan.textContent = pScore;
            CscoreSpan.textContent = cScore;
            
        }
        affichageScore()
        
        reset.addEventListener('click', function(){
            pScore = 0;
            cScore = 0;
            Pchoice(-1);
            Cchoice(-1);
            
        })
        
        
    }
}
/**
 * permet de jouer une musique ou la stopper en jeu
 */
function soundgame() {
    // déclaration des varaibles
    var x = document.getElementById("myAudio"); 
    var play = document.querySelector("#play");
    var pause = document.querySelector("#pause");
    // cache le bouton pause
    pause.style.display = "none";
    // lors du clic sur le bouton play lance la fonction qui fait jouer l'audio
    play.addEventListener('click', function(){
    // fait play sur l'audio dans MyAudio 
    x.play();
    // cache le bouton play pour afficher le bouton pause
    play.style.display = "none";
    pause.style.display = "inline";
    })

    // même chose que pour play sauf pour mettre en pause la musique
    pause.addEventListener('click', function(){ 
    x.pause()
    play.style.display = "inline";
    pause.style.display = "none";
    })
}
/**
 * permet de modifier le theme de la page en mode sombre ou claire 
 */
function power() {
    var body = document.querySelector("body");
    var h1 = document.querySelector("h1");
    var p = document.querySelector("#container_header");
    var nuit = document.querySelector("#dark");
    var jour = document.querySelector("#light");

    nuit.addEventListener('click', function(){
    body.style.backgroundColor = "#222222";
    body.style.transition ="1s";
    h1.style.color = "#fff";
    h1.style.transition ="1s";
    p.style.color = "#fff";
    p.style.transition ="1s";
    nuit.style.display = "none";
    jour.style.display = "inline";
    })
    jour.style.display = "none"
    jour.addEventListener('click', function(){ 
    body.style.backgroundColor = "#fff";
    
    h1.style.color = "#000";
    h1.style.transition ="1s";
    p.style.color = "#000";
    p.style.transition ="1s";
    jour.style.display = "none";
    nuit.style.display = "inline";
    })
}
/**
 * ajoute une nouvelle fonctionnalité au jeu (le puit)
 */
function gamePlus() {
    // déclaration des variables
    var pierre = document.querySelector('#pierre');
    var feuille = document.querySelector('#feuille');
    var ciseaux = document.querySelector('#ciseaux');
    var puit = document.querySelector("#puit");

    // l'image du joueur
    var Pimg = document.querySelector('#Pimg');
    // l'image de l'ordi
    var Cimg = document.querySelector('#Cimg');
    // le bouton reset
    var reset = document.querySelector("#reset");
    // cible les id pour le score des joueurs
    var PscoreSpan = document.querySelector('#Pscore');
    var CscoreSpan = document.querySelector('#Cscore');
    // initialisation des score à zero
    var pScore = 0;
    var cScore = 0;

    // tableau des possibilités
    var images_option = ['pierre','feuille','ciseaux', "puit"];


    // les fonctions d'affichage du choix utilisateur et ordinateur

    // choix utilisateur, i c'est pour le tableau,
    // il choisir la valeur qu'il va prendre pour récupérer la bonne image 
    
    var Pchoice = function(i){
        Pimg.src = 'img/'+images_option[i]+'.jpg';
        Pimg.value = images_option[i];
        compareHands();
    }
    //choix Ordinateur
    var Cchoice = function(i){
        Cimg.src = 'img/'+images_option[i]+'.jpg';
        Cimg.value = images_option[i];
    }

    // les evenements du clic pour la selection de l'utilisateur
    pierre.addEventListener('click', function(){
        //choisi pour l'ordi une des trois possibilités
        // renvoie le plus grand entier qui est inférieur ou égal à un nombre x
        Cchoice(Math.floor(Math.random() * 4));
        // utilisatation de la fonction Pchoice pour dire quel
        // valeur à séléctionné le joueur
        Pchoice(0);
    })

    feuille.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 4));
        Pchoice(1);
    })
    ciseaux.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 4));
        Pchoice(2);
    })
    puit.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 4));
        Pchoice(3);
    })

    // compare les mains des deux pour calculer qui gagne
    var compareHands = function(){
        // si le joueur à choisi pierre

        if(Pimg.value == 'pierre'){
            // si l'ordi a choisi la feuille
            if(Cimg.value == 'feuille'){
                // ordi +1 point
                cScore += 1; // feuille > pierre
            }
            // sinon si l'ordia choisi ciseaux
            else if(Cimg.value == 'ciseaux'){
                // joueur +1 point
                pScore += 1; // pierre > ciseaux
            }
            // sinon égalité donc rien ne se passe
            else if(Cimg.value == 'pierre'){

            }
            else if(Cimg.value == 'puit'){
                // joueur +1 point
                cScore += 1; // puit > pierre
            }
        }



        // même logique pour les autres choix
        else if(Pimg.value == 'ciseaux'){
            if(Cimg.value == 'pierre'){
                cScore += 1;  // pierre > ciseaux
            }
            else if(Cimg.value == 'feuille'){
                pScore += 1; // puit > pierre
            }
            
            else if(Cimg.value == 'ciseaux'){
                
            }
            else if(Cimg.value == 'puit'){
                // joueur +1 point
                cScore += 1;
            }
        }



        if(Pimg.value == 'feuille'){
            if(Cimg.value == 'ciseaux'){
                cScore += 1;
            }
            else if(Cimg.value == 'pierre'){
                pScore += 1;
            }
            else if(Cimg.value == 'feuille'){
                
            }
            else if(Cimg.value == 'puit'){
                // joueur +1 point
                pScore += 1;
            }
        }



        if(Pimg.value == 'puit'){
            if(Cimg.value == 'feuille'){
                cScore += 1;
            }
            else if(Cimg.value == 'pierre'){
                pScore += 1;
            }
            else if(Cimg.value == 'ciseaux'){
                pScore += 1;
            }
            else if(Cimg.value == 'puit'){
                pScore += 1;
            }
        }
        // recupère et afficher les scores dans les span comme une actualisation
        function affichageScore() {
            PscoreSpan.textContent = pScore;
            CscoreSpan.textContent = cScore;
            
        }
        affichageScore()
        // function reset lors du clic sur le bouton reset
        reset.addEventListener('click', function(){
            // remet les compteurs à zéro
            pScore = 0;
            cScore = 0;
            // enlève les choix dans la selection
            Pchoice(-1);
            Cchoice(-1);
            affichageScore();
        })
    }

}
/**
 * Permet d'afficher un bouton avec ou sans puit selon 
 * le mode sur le quel on veux jouer
 */
function afficheGamePlus() {
    // déclaration des variables utilisées
    var avecPuit = document.querySelector("#avecPuit");
    var sansPuit = document.querySelector("#sansPuit");
    var puit = document.querySelector("#puit");
    var tPuit = document.querySelector("#Tpuit");
    // met les logo puit et sanspuit visible et invisible 
    sansPuit.style.display = "none";
    avecPuit.style.display = "inline";
    avecPuit.addEventListener('click', function(){
        // appelle de la fonction gamePlus() pour ajouter la fonctionnalité avec le puit
        gamePlus();
        // echanger le logo puit visible 
        sansPuit.style.display = "inline";
        avecPuit.style.display = "none";
        // afficher le puit dans les possibilité
        puit.style.display = "block";
        // afficher le mot puit dans le titre
        tPuit.style.display = "inline";
    })
    sansPuit.addEventListener('click', function(){
        // appelle de la fonction game() sinon il jouera toujours gamePlus()
        game();
        // changement d'affichage
        sansPuit.style.display = "none";
        avecPuit.style.display = "inline";
        puit.style.display = "none";
        tPuit.style.display = "none";
        
    })

}

// appel de toutes les fonctions pour le déroulement du jeu 
game();
soundgame();
power();
afficheGamePlus();

