export abstract class Charactere {
    constructor( private _name: string){   
    }   

    get namp(): string {
        return this._name;    
    }   
    set name(name: string){
        if(! this.name){ throw new Error('Le nom est obligatoire');}
        this._name = name;   
    }
    
} 