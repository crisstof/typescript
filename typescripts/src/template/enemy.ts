import { Mechancete } from "./mechancete";
import { Charactere } from "./charactere";

export abstract class Enemy extends Charactere {
    constructor(name: string, private _mechancete: Mechancete){
        super(name);
    }

    get mechancete(): Mechancete {
        return this._mechancete;
    }

    set mechancete(mechancete: Mechancete){
        this._mechancete = mechancete;
    }
}