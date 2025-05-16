let input = document.querySelector('.input');

let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

let dot = document.querySelector('.dot');
let divide = document.querySelector('.divide');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let times = document.querySelector('.times');
let equals = document.querySelector('.equals');

let clear = document.querySelector('.clear');
let backSpace = document.querySelector('.backspace');

function btnInputValues(int) {
    switch (int) {
        case 0: 
            input.value = input.value + '0';
            break;
        case 1:
            input.value = input.value + '1';
            break;
        case 2:
            input.value = input.value + '2';
            break;
        case 3:
            input.value = input.value + '3';
            break;
        case 4:
            input.value = input.value + '4';
            break;
        case 5:
            input.value = input.value + '5';
            break;
        case 6:
            input.value = input.value + '6';
            break;
        case 7:
            input.value = input.value + '7';
            break;
        case 8:
            input.value = input.value + '8';
            break;
        case 9:
            input.value = input.value + '9';
            break;
        case 10:
            input.value = input.value + '.';
            break;
        case 11:
            input.value = input.value + '+';
            break;
        case 12:
            input.value = input.value + '-';
            break;
        case 13:
            input.value = input.value + 'x';
            break;
        case 14:
            input.value = input.value + '/';
            break;
        case 15: 
            input.value = '';
            break;
        case 16:
            let value = String(input.value);
            input.value = value.slice(0, value.length - 1);
            break;
    }
}

function inFixEvaluator(str) {
    let precedenceObject = {
        'x': 2,
        '/': 1,
        '+': 3,
        '-': 3,
    };

    let arr = str.split(/([x/+-])/);
    let operatorStack = [];
    let numberQueue = [];

    console.log(arr);

    for (const element of arr) {
        if (!isNaN(parseFloat(element)) && isFinite(element)) {
            numberQueue.push(element);
        } else {
            if (operatorStack.length == 0) {
                operatorStack.push(element);
            } else if (precedenceObject[element] >  precedenceObject[operatorStack.at(-1)]) {
                let lastOperator = operatorStack.pop();
                numberQueue.push(lastOperator);
                operatorStack.push(element);
            } else {
                operatorStack.push(element);
            }
        }
    }

    while (operatorStack.length != 0) {
        let lastOperator = operatorStack.pop();
        numberQueue.push(lastOperator);
    } 

    console.log(numberQueue)

    return (numberQueue);
}

function postFixEvaluator(arr) {
    let evalStack = [];

    for (const element of arr) {
        if (!isNaN(parseFloat(element)) && isFinite(element)) {
            evalStack.push(Number(element));
        } else {
            let lastIn = evalStack.pop();
            let secondToLastIn = evalStack.pop();
            switch (element) {
                case '+':
                    evalStack.push(lastIn + secondToLastIn);
                    break;
                case '-':
                    evalStack.push(secondToLastIn - lastIn);
                    break;
                case 'x':
                    evalStack.push(lastIn * secondToLastIn);
                    break;
                case '/':
                    evalStack.push(secondToLastIn / lastIn);
                    break;
            } 
        }
    }
    return evalStack[0];
}


zero.addEventListener('click', () => {
    btnInputValues(0);
});

one.addEventListener('click', () => {
    btnInputValues(1);
});

two.addEventListener('click', () => {
    btnInputValues(2);
});

three.addEventListener('click', () => {
    btnInputValues(3);
});

four.addEventListener('click', () => {
    btnInputValues(4);
});

five.addEventListener('click', () => {
    btnInputValues(5);
});

six.addEventListener('click', () => {
    btnInputValues(6);
});

seven.addEventListener('click', () => {
    btnInputValues(7);
});

eight.addEventListener('click', () => {
    btnInputValues(8);
});

nine.addEventListener('click', () => {
    btnInputValues(9);
});

dot.addEventListener('click', () => {
    btnInputValues(10);
});

plus.addEventListener('click', () => {
    btnInputValues(11);
});

minus.addEventListener('click', () => {
    btnInputValues(12);
});

times.addEventListener('click', () => {
    btnInputValues(13);
});

divide.addEventListener('click', () => {
    btnInputValues(14);
});

clear.addEventListener('click', () => {
    btnInputValues(15);
});

backSpace.addEventListener('click', () => {
    btnInputValues(16);
});

equals.addEventListener('click', () => {
    input.value = postFixEvaluator(inFixEvaluator(input.value));
});








