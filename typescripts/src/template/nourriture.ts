export class Nourriture {
    private pv = 0;
    constructor(pv: number){
        this.pointsDeVie = pv;
    }  
    
    
    get pointsDeVie(): number {
        return this.pv;
    }

    set pointsDeVie(value: number){
        this.pv = value;
    }
}