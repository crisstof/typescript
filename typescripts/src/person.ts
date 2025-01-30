import { Nourriture } from "./template/nourriture";

export class person {
    manger(nourriture: Nourriture){
        console.info("Je mange" + nourriture.pointsDeVie + 'points de vie!');
    }
}