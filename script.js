'use strict';

function Calculator() {
    this.calculate = function(str) {
        let arr = str.split(' ');
        let a = +arr[0];
        let b = +arr[2];
        let operation = arr[1];

        if(!this.methods || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[operation](a, b);
    };

    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;

    };

    

}

let calc = new Calculator();


let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("9 *** 3");
console.log(result);