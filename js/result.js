const result = document.querySelector('.resultado');
const btnReturn = document.querySelector('.voltar')
console.log(result);

function getCoin(){

    let coin = JSON.parse(localStorage.getItem('Coin'));
    console.log(coin);
    return coin;
}

function renderResult() {

    const coin = getCoin();
    const preco = +coin.priceUsd * 5.17;
    


    result.innerHTML = `
            <h2>Nome da Moeda: <span>${coin.name}</span></h2>
            <p>Simbolo:<span> ${coin.symbol}</span></p>
            <p>Rank:<span> ${coin.rank}</span></p>
            <p>Preço Atual: <span> ${preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</span></p>
            <p>Fornecimento: <span>${coin.supply}</span></p>
            <p>Fornecimento Max: <span>${coin.maxSupply}</span></p>`;

}

function pageReturn() {

    window.location = '../index.html'
}

btnReturn.addEventListener('click', pageReturn);

renderResult();