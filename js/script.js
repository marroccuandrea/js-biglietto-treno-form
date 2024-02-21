//Input
let inputNome = document.querySelector('.input-nome');
let inputKm = document.querySelector('.input-km');
let selectAge = document.querySelector('.select-age');

//Costant
const priceKm = 0.21;
let minorenne = document.querySelector('.minorenne');
let maggiorenne = document.querySelector('.maggiorenne');
let anziano = document.querySelector('.anziano');
const appear = document.querySelector('.container .appear');



//Buttons
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Bottone genera
btn1.addEventListener('click', function(event){
    event.preventDefault();
    let nome = inputNome.value;
    let km = inputKm.value;
    let eta = selectAge.value;
    let price = parseFloat((priceKm * km).toFixed(2));
    let underDisc = parseFloat((price * 20) /100);
    let overDisc = parseFloat((price * 40) /100);
    appear.classList.remove('d-none');
    document.getElementById('nome').innerHTML = nome;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random()* 10 + 1);
    document.getElementById('cp').innerHTML = Math.floor(Math.random()* 90000 + 11111);
    
    console.log(nome, km, eta, underDisc, overDisc);
    if (eta == "minorenne"){
        let finalPrice = (parseFloat(price - underDisc)).toFixed(2);
        console.log(finalPrice);
        document.getElementById('output').innerHTML = finalPrice + ' €';
        document.getElementById('offerta').innerHTML = 'Sconto al 20%';
    }
    else if (eta == "anziano"){
        let finalPrice = (parseFloat(price - overDisc)).toFixed(2);
        console.log(finalPrice);
        document.getElementById('output').innerHTML = finalPrice + ' €';
        document.getElementById('offerta').innerHTML = 'Sconto al 40%';
    }
    else{
        let finalPrice = price.toFixed(2);
        console.log(finalPrice);
        document.getElementById('output').innerHTML = finalPrice + ' €';
        document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    }
    
    
})

    

btn2.addEventListener('click', function(){
    inputNome.value = '';
    inputKm.value = '';
    selectAge.value = '';
})