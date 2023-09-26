import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumbersCollection([-5, 1, 2, 15, 0, -1, -20]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);

const charactersCollection = new CharactersCollection("Roman");

const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

