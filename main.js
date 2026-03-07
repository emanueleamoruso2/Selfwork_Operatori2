let dateobj = new Date();
let current_year = dateobj.getFullYear();
console.log(current_year);
let anno_nascita = Number(prompt('Il tuo anno di nascita?'));
let eta_persona= current_year - anno_nascita;
let years_necessary_to_100= 100 - eta_persona;
console.log(years_necessary_to_100);