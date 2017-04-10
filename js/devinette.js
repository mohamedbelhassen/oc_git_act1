/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var tentative;
//j'initialise le nombre de tentatives à zéro
var nombreTantatives=0;
//je définis le nombre maximal de tentatives que l'utilisateur peut effectuer avant de perdre
var nombreMaxDeTentatives=6;

do{
    //je commence par lire la tentative de l'utilisateur
    tentative=Number(prompt("Tentez de deviner le nombre choisi:"));
    //j'incrémente le nombre de tentatives effectuées par 1
    nombreTantatives++;
    //je teste la tentative effectuée avec le nombre choisi aléatoirement au débit du programme
    
    if(tentative===solution){
        console.log("Bravo ! la solution était "+solution);
        console.log("Vous avez trouvé en  "+nombreTantatives+ " essai(s)");
    }
    else if(tentative<solution){
        console.log(tentative+" est trop petit");
    }
    else {
        console.log(tentative+" est trop grand");
    }   
//je refais le traitement si la tentative ne correspond pas au nombre recherché et si je n'ai pas encore atteint le nombre max de tentatives
}while(tentative!==solution && nombreTantatives<nombreMaxDeTentatives);

//ici, je dois m'assurer que le joueur n'a pas trouvé le nombre recherché avant de le signaler comme perdu.
if(tentative!== solution){
    console.log("Perdu... la solution était "+solution);
}