'use strict';

function c(...arg) {
    console.log(...arg);
}

function alert(...arg) {

    console.log(...arg);
}

function generatePasswordCode(length) {
    const min1 = 48;
    const max1 = 57;

    const min2 = 65;
    const max2 = 90;

    const min3 = 97;
    const max3 = 122;

    function charCode() {

        function random(min, max) {
            return Math.floor(Math.random() * (max + 1 - min) + min);
        }
        let arr = [];
        arr.push(random(min1, max1));
        arr.push(random(min2, max2));
        arr.push(random(min3, max3));

        return arr[random(0, arr.length - 1)];
        
    }

    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(String.fromCharCode(charCode()));
    }

    return c(res.join(''));

}

generatePasswordCode(17);