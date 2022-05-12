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
let currentValue = 0;
let func = '';
let operationTicker = 0;
const displayValue = document.querySelector('.display');

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    displayValue.textContent= displayValue.textContent + 0;
    currentValue = displayValue.textContent;
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 1;
    currentValue = displayValue.textContent;
    }
    else {displayValue.textContent= displayValue.textContent + 1;
    currentValue = displayValue.textContent;
    }
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
    currentValue = 0;
    totalValue = 0;
    func = '';
});
const enter = document.querySelector('#enter');
enter.addEventListener('click', () => {
    currentValue = (displayValue.textContent);  
    totalValue = (operate(func,totalValue,currentValue));
    displayValue.textContent = totalValue;
})
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (totalValue != 0) {
    currentValue = (displayValue.textContent);
    totalValue = (operate(func,totalValue,currentValue));
    displayValue.textContent = totalValue;
    operationTicker = 1;
    }
    else {totalValue =displayValue.textContent;
    currentValue = 0;
    func = 'add';
    displayValue.textContent = '';
    operationTicker = 1;
    }
});
const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    totalValue =displayValue.textContent;
    currentValue = 0;
    func = 'subtract';
    displayValue.textContent = '';
});
const times = document.querySelector('#times');
times.addEventListener('click', () => {
    totalValue = displayValue.textContent;
    currentValue = 0;
    func = 'multiply';
    displayValue.textContent = '';
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    totalValue = displayValue.textContent;
    currentValue = 0;
    func = 'dividing';
    displayValue.textContent = '';
});
//dont forget to convert string into numbers if necessary.+

//implement a counter in enter so it cant continue running if no other key 
//has been pressed, or other logic.