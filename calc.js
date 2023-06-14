var exp = '', number, decimal, operator, equal, allowSR = true;
var display = document.forms['myform']['display'];

function insertNum(num) {
    if (equal) {
        exp = num;
        display.value = exp;
        number = true;
        equal= false;
    }
    else {
        exp = display.value + num;
        display.value = exp;
        number = true;
    }
    if (operator) decimal = false
    SR('a');
}
function insertOp(op) {
    display.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
    SR('a');
}
function insertDec() {
    if (number && !decimal) {
        display.value = exp + '.';
        decimal = true;
        operator = false;
    }
}
function equalTo() {
    if (exp) {
        exp = eval(exp);
        display.value = parseFloat(exp.toFixed(2));
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
        SR('a');
    }
}
function clean() {
    exp = '';
    display.value = exp;
    decimal =  false;
}
function back() {
    exp = display.value;
    exp = exp.substring(0, exp.length - 1);
    display.value = exp;
}
function SR(x) {
    if (x == 'r')  {
        exp = Math.sqrt(exp);
        display.value = parseFloat(exp.toFixed(2));
    }
    else if (x == 's') {
        exp = exp * exp;
        display.value = exp;
    }
    else if (x == 'a' && allowSR) {
        document.getElementById('r').disabled = false;
        document.getElementById('s').disabled = false;
    }
    else if(!allowSR) {
        document.getElementById('r').disabled = true;
        document.getElementById('s').disabled = true;
    }
}
