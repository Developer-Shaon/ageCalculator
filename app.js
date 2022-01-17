


const checkButton = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const years = document.querySelector('#years');
const pp = document.querySelector('#pp');
const resett = document.querySelector('#resett');




checkButton.addEventListener('click', function(){

pp.innerHTML = agecall(name.value, years.value);


});

resett.addEventListener('click', ()=>{

name.value = '';
years.value = '';
pp.innerHTML = '';
});