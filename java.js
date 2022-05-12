function add(a, b){
    return Number((a + b).toFixed(8));
};

function subtract(a, b){
    return Number((a - b).toFixed(8));
};

function multiply(a, b){
    return Number((a * b).toFixed(8));
};

function dividing(a, b){
    if( b > 0) return Number((a/b).toFixed(8));
    else return 'Nice try buddy!';
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
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 0;
        currentValue = displayValue.textContent;
    }
    else { 
        displayValue.textContent= displayValue.textContent + 0;
        currentValue = displayValue.textContent;
    }
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 1;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 1;
        currentValue = displayValue.textContent;
    }
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 2;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 2;
        currentValue = displayValue.textContent;
    }
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 3;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 3;
        currentValue = displayValue.textContent;
    }
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 4;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 4;
        currentValue = displayValue.textContent;
    }
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 5;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 5;
        currentValue = displayValue.textContent;
    }
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 6;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 6;
        currentValue = displayValue.textContent;
    }
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 7;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 7;
        currentValue = displayValue.textContent;
    }
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 8;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 8;
        currentValue = displayValue.textContent;
    }
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 9;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + 9;
        currentValue = displayValue.textContent;
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue.textContent= '';
    currentValue = 0;
    totalValue = 0;
    func = '';
    operationTicker = 0;
});

const enter = document.querySelector('#enter');
enter.addEventListener('click', () => {
    if (func === '' || totalValue === 0) {
    displayValue.textContent = displayValue.textContent;
 } 
    else if ( totalValue > 0 && func === '') {
    totalValue = (operate(func, totalValue, totalValue));
    displayValue.textContent = totalValue;
    currentValue= 0;
    operationTicker = 1;
    func = '';
    }
    else {
    totalValue = (operate(func, totalValue, currentValue));
    displayValue.textContent = totalValue;
    currentValue= 0;
    operationTicker = 1;
    func = ''; 
    }
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (totalValue === 0){
        totalValue = displayValue.textContent;
        func= 'add';
        operationTicker = 1;
    }
    else if(currentValue=== 0){
        func = 'add';
    }
    else {
        currentValue = displayValue.textContent;
        totalValue = (operate(func, totalValue, currentValue));
        func = 'add';
        currentValue = 0;
        displayValue.textContent = totalValue;
        operationTicker = 1;
    }
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (totalValue === 0){
        totalValue = displayValue.textContent;
        func= 'subtract';
        operationTicker = 1;
    }
    else if(currentValue=== 0){
        func = 'subtract';
    }
    else {
        currentValue = displayValue.textContent;
        totalValue = (operate(func, totalValue, currentValue));
        func = 'subtract';
        currentValue = 0;
        displayValue.textContent = totalValue;
        operationTicker = 1;
    }
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    if (totalValue === 0){
        totalValue = displayValue.textContent;
        func= 'multiply';
        operationTicker = 1;
    }
    else if(currentValue=== 0){
        func = 'multiply';
    }
    else {
        currentValue = displayValue.textContent;
        totalValue = (operate(func, totalValue, currentValue));
        func = 'multiply';
        currentValue = 0;
        displayValue.textContent = totalValue;
        operationTicker = 1;
    }
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    if (totalValue === 0){
        totalValue = displayValue.textContent;
        func= 'dividing';
        operationTicker = 1;
    }
    else if(currentValue=== 0){
        func = 'dividing';
    }
    else {
        currentValue = displayValue.textContent;
        totalValue = (operate(func, totalValue, currentValue));
        func = 'dividing';
        currentValue = 0;
        displayValue.textContent = totalValue;
        operationTicker = 1;
    }
});