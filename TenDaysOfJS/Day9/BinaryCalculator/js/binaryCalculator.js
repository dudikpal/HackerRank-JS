let display = document.querySelector("#res");

function clickBtn0() {
    display.innerHTML += "0";
}

function clickBtn1() {
    display.innerHTML += "1";
}
function clickBtnAdd() {
    display.innerHTML += "+";
}

function clickBtnSubtr() {
    display.innerHTML += "-";
}

function clickBtnMult() {
    display.innerHTML += "*";
}

function clickBtnDiv() {
    display.innerHTML += "/";
}

function clickBtnClr() {
    display.innerHTML = "";
}

function clickBtnCompute() {
    //const separator = /[+\-*\/](?=\d)/;
    let expressionArray = display.innerHTML.split(/([+\-*/])/);
    document.querySelector(".temp").innerHTML = expressionArray;
    const a = parseInt(expressionArray[0], 2);
    const b = parseInt(expressionArray[2], 2);
    let result;
    switch(expressionArray[1]) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }
    result = result.toString(2);
    display.innerHTML = result;
}