const clickCounter = {
  red: 0,
  yellow: 0,
  green: 0,
};

const countRed = 0;
const countYellow = 0;
const countGreen = 0;


const redButton = document.querySelector('.red');
const yellowButton = document.querySelector('.yellow');
const greenButton = document.querySelector('.green');
const displayCount = document.querySelector('.displayCount');
const box = document.querySelector('#box');

redButton.addEventListener('click', (evt) => {
  console.log('punainen');
  box.innerHTML = 'punainen' + Object.values(clickCounter)[0];
  clickCounter['red'] +=1;
  console.log(clickCounter);
});



yellowButton.addEventListener('click', (evt) => {
  console.log('keltainen');
  box.innerHTML = 'keltainen' + Object.values(clickCounter)[0];
clickCounter ['yellow'] +=1;
console.log(clickCounter);
});


greenButton.addEventListener('click', (evt) => {
  console.log('vihreä');
  box.innerHTML = 'vihreä' + Object.values(clickCounter)[0];
clickCounter ['green'] +=1;
console.log(clickCounter);
});





