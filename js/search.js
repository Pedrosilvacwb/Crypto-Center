const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const form = document.querySelector('form');
const cambioSelect = document.querySelector('#cambio');


function validateInput(event) {
    if(input.value.length != 0){
        
        btn.removeAttribute('disabled');
    }else{
        btn.setAttribute('disabled', '');
    }

   
}

async function renderOptions() {

    const options = await fetchCambio();
    const siglas = Object.keys(options.rates);

    siglas.forEach(sigla => {
        const option = document.createElement('option');
        option.innerText = sigla;
        option.setAttribute('value', sigla);
        cambioSelect.append(option);
    })
}

renderOptions();

async function fetchCambio(){

    let cambio = await (await fetch('https://open.er-api.com/v6/latest/USD')).json();

    return cambio;

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

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);