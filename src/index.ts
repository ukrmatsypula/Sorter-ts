import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([-5, 1, 2, 15, 0, -1, -20]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
