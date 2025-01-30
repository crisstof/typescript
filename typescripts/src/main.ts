import {person} from './person';
import { Nourriture } from './template/nourriture';

let frodon = new person();
frodon.manger(new Nourriture(10));
// Output: Je mange
