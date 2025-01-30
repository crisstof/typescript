export class Arme{
    public puissance = 10;
    public bouclier = 0;

}

//créer un type ce type on peut l'utiliser n'importe ou en dehors de mon fichier ts
export type AvecPuissance = {puissance: number};
//le type n'existe pas avec le js car il est que pour tsle controle de type


/**
 * Affiche la puissance de l'arme
 * @param arme 
 */
//ici c'est un prototypage mais pas une instance de la classe
//export function afficherPuissance(arme: {puissance: number}){
export function afficherPuissance(arme: AvecPuissance){
    console.info("La puissance de l'arme est de " + arme.puissance);
}