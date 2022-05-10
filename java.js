function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function dividing(a, b){
    return a/b;
};

function operate(func,a,b) {
    if (func === 'add') return add(a,b);
    if (func === 'subtract') return subtract(a,b);
    if (func === 'multiply') return multiply(a,b);
    if (func === 'dividing') return dividing(a,b);
}

a = 0;
b = 0;
func = '';
const displayValue = document.querySelector('.display');

let displayNumbers = displayValue.textContent;

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '0';
    displayNumbers = displayValue.textContent;
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '1';
    displayNumbers = displayValue.textContent;
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '2';
    displayNumbers = displayValue.textContent;
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '3';
    displayNumbers = displayValue.textContent;
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '4';
    displayNumbers = displayValue.textContent;
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '5';
    displayNumbers = displayValue.textContent;
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '6';
    displayNumbers = displayValue.textContent;
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '7';
    displayNumbers = displayValue.textContent;
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '8';
    displayNumbers = displayValue.textContent;
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + '9';
    displayNumbers = displayValue.textContent;
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue.textContent= '';
    displayNumbers = displayValue.textContent;
    a = 0;
    b= 0;
    func = '';
});
const enter = document.querySelector('#enter');
enter.addEventListener('click', () => {
    b = Number(displayValue.textContent);
    displayValue.textContent= operate(func,a,b);
})
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (a > 1) b = Number(displayValue.textContent);
    if (b > 1) displayValue.textContent = operate('add',a,b);
    if (a === 0) a = Number(displayValue.textContent);
    func = 'add';
    if (b ===0 ) displayValue.textContent = '';
});
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    a = Number(displayValue.textContent);
    func = 'subtract';
    displayValue.textContent = '';
});
const times = document.querySelector('#times');
times.addEventListener('click', () => {
    a = Number(displayValue.textContent);
    func = 'multiply';
    displayValue.textContent = '';
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    a = Number(displayValue.textContent);
    func = 'dividing';
    displayValue.textContent = '';
});
//dont forget to convert string into numbers if necessary.+

//implement a counter in enter so it cant continue running if no other key 
//has been pressed, or other logic.