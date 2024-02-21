//Input
let inputNome = document.querySelector('.input-nome');
let inputKm = document.querySelector('.input-km');
let selectAge = document.querySelector('.select-age');

//Costant
const priceKm = 0.21;
let minorenne = document.querySelector('.minorenne');
let maggiorenne = document.querySelector('.maggiorenne');
let anziano = document.querySelector('.anziano');




//Buttons
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');


btn1.addEventListener('click', function(){
    let nome = inputNome.value;
    let km = inputKm.value;
    let eta = selectAge.value;
    let price = parseFloat((km * priceKm).toFixed(2));
    let underDisc = ((price * 20) /100);
    let overDisc = ((price * 40) /100);
    const priceDiscUnder = price - underDisc;
    const priceDiscOver = price - overDisc;
    // console.log(nome, km, eta, priceDiscOver);
    if (eta == minorenne) {
        console.log('Applico sconto 20%');
        
        console.log(priceDiscUnder);
        document.getElementById('output').innerHTML = 'Hai diritto allo sconto del 20% !'
    }
    else if (eta == anziano){
        console.log('Applico sconto del 40%');
        underDisc;
        console.log(priceDiscOver);
        document.getElementById('output').innerHTML = 'Hai diritto allo sconto del 40% !'
    }
    else if (eta == maggiorenne){
        console.log('Nessuno sconto applicato');
        underDisc = 0;
        console.log(price);
    }
    
})

btn2.addEventListener('click', function(){
    inputNome.value = '';
    inputKm.value = '';
    selectAge.value = '';
})