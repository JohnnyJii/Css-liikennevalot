'use strict';

let colorClicked = document.querySelector('#colorClicked');
let red = document.querySelector('#red');
let redT = document.querySelector('#redT');
let yellow = document.querySelector('#yellow');
let yellowT = document.querySelector('#yellowT');
let green = document.querySelector('#green');
let greenT = document.querySelector('#greenT');
let getColor= document.querySelector('#getColor');

const clickCounter = {redL: 0, yellowL: 0, greenL:0};

red.addEventListener('click', (evt) => {
  clickCounter['redL'] +=1;
  colorClicked.innerHTML = 'red';
  getColor.innerHTML = window.getComputedStyle(red, null).getPropertyValue('background');
  redT.innerHTML = "Red: " + Object.values(clickCounter)[0] + " times";
});

yellow.addEventListener('click', (evt) => {
  clickCounter['yellowL'] +=1;
  colorClicked.innerHTML = 'yellow';
  getColor.innerHTML = window.getComputedStyle(yellow, null).getPropertyValue('background');
  yellowT.innerHTML = "Yellow: " + Object.values(clickCounter)[0] + " times";
});

green.addEventListener('click', (evt) => {
  clickCounter['greenL'] +=1;
  colorClicked.innerHTML = 'green';
  getColor.innerHTML = window.getComputedStyle(green, null).getPropertyValue('background');
  greenT.innerHTML = "Red: " + Object.values(clickCounter)[0] + " times";
});
