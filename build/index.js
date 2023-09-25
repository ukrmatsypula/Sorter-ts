"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([-5, 1, 2, 15, 0, -1, -20]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
