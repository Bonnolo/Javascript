import { squareNumber } from "../01_library/index.js";
import { halfNumber } from "../01_library/index.js";
import { percentof } from "../01_library/index.js";
import { area0fCircle } from "../01_library/index.js";

// salvo in una variabile il mio bottone
let square = document.querySelector("#square-button");
// aggiungo un evento di ascolto alla mia variabile
square.addEventListener("click", (event) => {
  //creo una variabile value dove mi salvo il valore del box (es.2)
  let value = document.querySelector("#square-input").value;
  //aggiungo al html il risultato (cosa voglio modificare = funzione (valore) )
  document.querySelector("#square-result").innerHTML = squareNumber(value);
});

let half = document.querySelector("#half-button");
half.addEventListener("click", (event) => {
  let value = document.querySelector("#half-input").value;
  document.querySelector("#half-result").innerHTML = halfNumber(value);
});

let percent = document.querySelector("#percentage-button");
percent.addEventListener("click", (event) => {
  let value = document.querySelector("#percentage-input").value;
  let value2 = document.querySelector("#percentage-input2").value;
  document.querySelector("#percentage-result").innerHTML = percentof(
    value,
    value2
  );
});

let area = document.querySelector("#area-button");
area.addEventListener("click", (event) => {
  let value = document.querySelector("#area-input").value;
  document.querySelector("#area-result").innerHTML = area0fCircle(value);
});
