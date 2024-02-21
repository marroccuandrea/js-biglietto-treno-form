//Input
const inputNome = document.querySelector('.input-nome');
const inputKm = document.querySelector('.input-km');
const selectAge = document.querySelector('.select-age');

console.log(inputNome);

//Buttons
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
console.log(btn1);

btn1.addEventListener('click', function(){
    const nome = inputNome.value;
    const km = inputKm.value;
    const eta = selectAge.value;

    console.log(nome, km, eta);
})