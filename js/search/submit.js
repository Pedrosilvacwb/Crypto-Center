import { cambioSelect } from "./renderOptions.js";

const input = document.querySelector('.input');
const btn = document.querySelector('.button');

function validateInput(event) {
    if(input.value.length != 0){
        
        btn.removeAttribute('disabled');
    }else{
        btn.setAttribute('disabled', '');
    }

   
}

async function handleSubmit(event){
    event.preventDefault();

    let moeda = input.value.trim().toLowerCase();
    let cambio = cambioSelect.value;
    input.value = ''

    if(moeda.includes(' ')){
        moeda = moeda.replace(' ', '-')
    }
    
    let response = await fetch(`https://api.coincap.io/v2/assets/${moeda}`);
    let responseJson = await response.json();
    let coinData = responseJson.data;


    localStorage.clear()
    localStorage.setItem('Coin', JSON.stringify(coinData));
    localStorage.setItem('Cambio', cambio);

    window.location = 'pages/result.html'

}

export {validateInput, handleSubmit, input}