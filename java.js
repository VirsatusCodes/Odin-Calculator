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
let enterTicker=0;
const displayValue = document.querySelector('.display');

function operationsDirections(operation){
    if (totalValue === 0){
        totalValue = displayValue.textContent;
        func= operation;
        operationTicker = 1;
    }
    else if(currentValue=== 0){
        func = operation;
    }
    else if(currentValue != 0 && totalValue != 0 && enterTicker === 1){
        totalValue= displayValue.textContent;
        currentValue=0;
        func=operation;
        operationTicker=1;
        enterTicker--;
    }
    else {
        currentValue = displayValue.textContent;
        totalValue = (operate(func, totalValue, currentValue));
        func = operation;
        currentValue = 0;
        displayValue.textContent = totalValue;
        operationTicker = 1;
    }
}

function numberDirections(number){
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + number;
        currentValue = displayValue.textContent;
    }
    else {
        displayValue.textContent= displayValue.textContent + number;
        currentValue = displayValue.textContent;
    }
}

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '';
        operationTicker--;
        displayValue.textContent= displayValue.textContent + 0;
        currentValue = displayValue.textContent;
    }
    else if(displayValue.textContent[0]==0){
        displayValue.textContent= displayValue.textContent
    }
    else { 
        displayValue.textContent= displayValue.textContent + 0;
        currentValue = displayValue.textContent;
    }
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    numberDirections(1);
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    numberDirections(2);
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    numberDirections(3);
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    numberDirections(4);
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    numberDirections(5);
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    numberDirections(6);
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    numberDirections(7);
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    numberDirections(8);
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    numberDirections(9);
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if(operationTicker === 1) {
        displayValue.textContent = '0.';
        operationTicker--;
        currentValue = displayValue.textContent;
    }
    else if(displayValue.textContent.includes('.')){
            displayValue.textContent = displayValue.textContent;
        }
    else {
        displayValue.textContent= displayValue.textContent + '.';
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

const back = document.querySelector('#back');
back.addEventListener('click', () => {
    displayValue.textContent = displayValue.textContent.slice(0, displayValue.textContent.length - 1);
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
    enterTicker=1;
    func = '';
    }
    else {
    totalValue = (operate(func, totalValue, currentValue));
    displayValue.textContent = totalValue;
    currentValue= 0;
    operationTicker = 1;
    enterTicker=1;
    func = ''; 
    }
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operationsDirections('add')
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    operationsDirections('subtract')
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    operationsDirections('multiply')
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    operationsDirections('dividing')
});