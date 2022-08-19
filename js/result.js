const result = document.querySelector('.resultado');
const btnReturn = document.querySelector('.voltar')

function getCoin(){

    let coin = JSON.parse(localStorage.getItem('Coin'));

    return coin;
}

async function fetchCambio(){

    let cambio = await (await fetch('https://open.er-api.com/v6/latest/USD')).json();

    return cambio;

}

async function convert(){
    let coin = getCoin();
    let cambio = localStorage.getItem('Cambio');
    let cambioOptions = (await fetchCambio()).rates;
    let coinConverted = coin.priceUsd * cambioOptions[`${cambio}`]

   return coinConverted
};



async function renderResult() {

    const coin = getCoin();
    const preco = await convert();
    const cambio = localStorage.getItem('Cambio');

    console.log(preco);  

    result.innerHTML = `
            <h2>Nome da Moeda: <span>${coin.name}</span></h2>
            <p>Simbolo:<span> ${coin.symbol}</span></p>
            <p>Rank:<span> ${coin.rank}</span></p>
            <p>Preço Atual: <span> ${preco.toLocaleString('en-US', {style:"currency", currency:`${cambio}`})}</span></p>
            <p>Fornecimento: <span>${coin.supply}</span></p>
            <p>Fornecimento Max: <span>${coin.maxSupply}</span></p>`;

}

function pageReturn() {

    window.location = '../index.html'
}

btnReturn.addEventListener('click', pageReturn);

renderResult();