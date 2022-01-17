
/**
 * age calculator for fun
 * @param {*} name 
 * @param {*} years 
 * @returns 
 */


function agecall(name, years){

let date = new Date();

 age = date.getFullYear() - years;

return `<p class="alert alert-success text-center"> Hi ${name}, you are ${age} years old. </p> `;

};