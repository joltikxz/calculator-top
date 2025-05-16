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

//flag for numerical input
let flag = false;
let operationArr = [];

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
            console.log(input.value);
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

function isRepeatingDecimal(numerator, denominator) {
    // Reduce the fraction first
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(numerator, denominator);
    denominator /= divisor;

    // Remove all factors of 2
    while (denominator % 2 === 0) {
        denominator /= 2;
    }

    // Remove all factors of 5
    while (denominator % 5 === 0) {
        denominator /= 5;
    }

    // If what's left is 1, it's a finite decimal
    return denominator !== 1;
}


function operationArray(element) {
    operationArr.push(element);
}

function operationArrayEval(arr) {
    if (arr[1] == '+') {
        return (arr[0] + arr[2]);
    } else if (arr[1] == '-') {
        return (arr[0] - arr[2]);
    } else if (arr[1] == '*') {
        return (arr[0] * arr[2]);
    } else if ((arr[1] == '/') && (Number(arr[2]) == 0)) {
        return 'Infinity error';
    } else if (arr[1] == '/') {
        let result = arr[0] / arr[2];
        if (isRepeatingDecimal(arr[0], arr[2])) {
            return result.toFixed(5);
        } else {
            return result;
        }
    } 
}


zero.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(0);
});

one.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(1);
});

two.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(2);
});

three.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(3);
});

four.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(4);
});

five.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(5);
});

six.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(6);
});

seven.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(7);
});

eight.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(8);
});

nine.addEventListener('click', () => {
    if (flag == true) {
        input.value = '';
    }
    flag = false;
    btnInputValues(9);
});

dot.addEventListener('click', () => {
    btnInputValues(10);
});

plus.addEventListener('click', () => {
    flag = true;
    if (Number(input.value) % 1 != 0) {
        // TODO: Implement Number conversion for the rest of the operations. 
        // TODO: Please make this cleaner lol
        operationArray(Number(input.value));
        operationArray('+');
    } else {
        operationArray(Number(input.value));
        operationArray('+');
    }
});

minus.addEventListener('click', () => {
    flag = true;
    if (Number(input.value) % 1 != 0) {
        operationArray(Number(input.value));
        operationArray('-');
    } else {
        operationArray(Number(input.value));
        operationArray('-');
    }
});

times.addEventListener('click', () => {
    flag = true;
    if (Number(input.value) % 1 != 0) {
        operationArray(Number(input.value));
        operationArray('*');
    } else {
        operationArray(Number(input.value));
        operationArray('*');
    }
});

divide.addEventListener('click', () => {
    flag = true;
    if (Number(input.value) % 1 != 0) {
        operationArray(Number(input.value));
        operationArray('/');
    } else {
        operationArray(Number(input.value));
        operationArray('/');
    }
});

clear.addEventListener('click', () => {
    flag=false;
    btnInputValues(15);
});

backSpace.addEventListener('click', () => {
    btnInputValues(16);
});

equals.addEventListener('click', () => {
    flag = true;
    operationArray(Number(input.value));
    console.log(operationArr);
    input.value = operationArrayEval(operationArr);
    operationArr = [];
});








