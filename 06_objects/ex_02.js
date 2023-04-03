import { getKeys } from './ex_01.js'
let student = {
    name: "David Rayy",
    studentClass : "VI",
    rollNumber : 1213
};
let car = {
    brand: "Ford",
    model: "Fiesta",
    kilometres: 50000,
    year: 2019,
    color: "black"
}
console.log(`Le proprietà dell'oggetto student sono ${getKeys(student).length}`)
console.log(`Le proprietà dell'oggetto car sono ${getKeys(car).length}`)