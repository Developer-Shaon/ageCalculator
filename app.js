


const checkButton = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const years = document.querySelector('#years');
const pp = document.querySelector('#pp');
const resett = document.querySelector('#resett');





checkButton.addEventListener('click', function(){

pp.innerHTML = agecall(name.value, years.value);

if(name.value == '' || years.value == ''){

    pp.innerHTML = `<p class="alert alert-danger">All filds are requerd</p>`
    
    }

});





years.addEventListener('keyup', ()=>{

    let patten = /^[0-9]*$/;
    console.log(patten.test(years.value));

    if(patten.test(years.value) == false){

        pp.innerHTML = `<p class="alert alert-danger text-center"> Input Only Number </p>`
     }else{
         pp.innerHTML = '';
     }
     
     if (years.value == ''){

        pp.innerHTML = '';
     }
   

})

resett.addEventListener('click', ()=>{

name.value = '';
years.value = '';
pp.innerHTML = '';
});

