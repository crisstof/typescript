export class Player{
    constructor(
        private _prenom: string){   
    }

    get prenom(): string {
        return this._prenom;    

    }

    set prenom(value: string){
        this._prenom = value;   
    }

}