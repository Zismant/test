'use strict';

function Calculator() {
    this.calculate = function(str) {
        let arr = str.split(' ');
        this.a = +arr[0];
        this.b = +arr[2];
        this.operation = arr[1];
        console.log(arr);

        if (this.operation === '+') {return this.plus();}
        if (this.operation === '-') {this.minus();}

    };

    this.plus = () => this.a + this.b;
    this.plus = () => this.a + this.b;

}

    let calc = new Calculator();
    console.log(calc.calculate("3 - 7"));