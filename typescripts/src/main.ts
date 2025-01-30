import {person} from './person';
import { Nourriture } from './template/nourriture';
import { Arme, AvecPuissance, afficherPuissance } from './template/arme'; 


let frodon = new person();
frodon.manger(new Nourriture(10));
// Output: Je mange
const arme = new Arme();
//ici ça comppile car in vérifie que la structure sui m'interesse est respectée
//cela s'appelle des fonctions polymorphiques

const arc: AvecPuissance = {
    puissance: 20
};


//utilisation
afficherPuissance(new Arme());
afficherPuissance({puissance: 20});

