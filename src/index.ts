import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([-5, 1, 2, 15, 0, -1, -20]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);

const charactersCollection = new CharactersCollection("Roman");

const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
