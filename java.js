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
    if (func === 'add') return add(Number(a),Number(b));
    if (func === 'subtract') return subtract(Number(a),Number(b));
    if (func === 'multiply') return multiply(Number(a),Number(b));
    if (func === 'dividing') return dividing(Number(a),Number(b));
}

let totalValue = 0;
let func = '';
const displayValue = document.querySelector('.display');

let currentValue = 0;

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 0;
    currentValue = displayValue.textContent;
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 1;
    currentValue = displayValue.textContent;
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 2;
    currentValue = displayValue.textContent;
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 3;
    currentValue = displayValue.textContent;
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 4;
    currentValue = displayValue.textContent;
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 5;
    currentValue = displayValue.textContent;
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 6;
    currentValue = displayValue.textContent;
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 7;
    currentValue = displayValue.textContent;
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 8;
    currentValue = displayValue.textContent;
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 9;
    currentValue = displayValue.textContent;
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue.textContent= '';
    currentValue = displayValue.textContent;
    currentValue = 0;
    totalValue = 0;
    func = '';
});
const enter = document.querySelector('#enter');
enter.addEventListener('click', () => {
    currentValue = (displayValue.textContent);  
    totalValue = (operate(func,currentValue,totalValue));
    displayValue.textContent = totalValue;
})
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    totalValue =displayValue.textContent;
    currentValue = 0
    func = 'add';
    displayValue.textContent = '';
});
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    currentValue =displayValue.textContent;
    func = 'subtract';
    displayValue.textContent = '';
});
const times = document.querySelector('#times');
times.addEventListener('click', () => {
    currentValue = displayValue.textContent;
    func = 'multiply';
    displayValue.textContent = '';
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    currentValue = displayValue.textContent;
    func = 'dividing';
    displayValue.textContent = '';
});
//dont forget to convert string into numbers if necessary.+

//implement a counter in enter so it cant continue running if no other key 
//has been pressed, or other logic.