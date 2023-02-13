const $ = (selector) => document.querySelector(selector);

let myButton = $('.stile1');
let myButton2 = $('.stile2');
console.log(myButton2);

const changeClass = (event) => {
    console.log(event);
    event.target.classList.toggle('btn-primary');
    event.target.classList.toggle('btn-secondary');
};

myButton.addEventListener('click', (event) => {
    console.log(event.target);
    /* BAD PRACTICE
    console.log(myButton);*/
    event.target.classList.add('btn-primary');
    event.target.classList.remove('btn-secondary');
});

const buttons = document.querySelectorAll('.stile3');
console.log(buttons);

buttons.forEach((element) => {
    element.addEventListener('click', changeClass);

})