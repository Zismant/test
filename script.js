'use strict';

function c(...arg) {
    console.log(...arg);
}

function alert(...arg) {
    console.log(...arg);
}


const img = document.querySelectorAll('img'),
      prev = document.querySelector('#prev'),
      next = document.querySelector('#next');
      

let sliderLength = img.length;
document.querySelector('.length').textContent = sliderLength ;
let index = 1;

show();

function nextSlaid() {
    if (index >= sliderLength) {index = 1;}
    else {index++;}
    show();
    
}

function prevSlaid() {
    if (index <= 1) {index = sliderLength;}
    else {index--;}
    show();
   
}

function show() {
    
    img.forEach(item => {
        item.style.display = 'none';
    });
    img[index - 1].style.display = '';
    document.querySelector('.index').textContent = index;
}

prev.addEventListener('click', () => prevSlaid());
next.addEventListener('click', () => nextSlaid());



