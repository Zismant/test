'use strict';

// let calc = new Calculator();

// function Calculator() {
//     this.name = '';
//     this.methods = {};


//     this.calculate = function (str) {

//         let arr = str.split(' ');
//         let a = arr[0];
//         let b = arr[arr.length - 1];
//         let op = arr[1]; // "+" 

//         if (this.methods[op]) {
//             //+
//         let func = this.methods[op];
//            return func[this.op](a, b);
//         } else { console.warn("there are not methods. please add somr methods")}
        



//     };

//     this.addMethod = function (op, fn) {
//         this.map[op] = fn;
//         //{"+" : (a, b) => a + b
//     //     "-" : (a, b) => a - b }
//     };


// }

// let powerCalc = new Calculator();
// powerCalc.addMethod("+", );
// powerCalc.addMethod("-", (a, b) => a - b);
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// //powerCalc.addMethod("send na hui", (a, b) => console.log(`params ${a} send na hui params ${b}`))
// console.log(powerCalc.calculate("2 ** 3"));

let obj = {};

function createObj(key, value) {
   obj[key] = value;
    
    
}

let a = createObj('age', 88 );
console.log(obj);
createObj('agerr', 88 );
console.log(obj);
createObj('agerruu', 887 );
console.log(obj);
createObj('agerruuu', 887 );

console.log(obj);

