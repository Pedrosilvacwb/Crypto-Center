import { getCoin, fetchCambio, convert} from "./convert.js";
const result = document.querySelector('.resultado');

async function renderResult() {

    const coin = getCoin();
    const cambioValor = await convert();
    const cambioSigla = localStorage.getItem('Cambio');

    console.log(cambioValor);  

    result.innerHTML = `
            <h2>Nome da Moeda: <span>${coin.name}</span></h2>
            <p>Simbolo:<span> ${coin.symbol}</span></p>
            <p>Rank:<span> ${coin.rank}</span></p>
            <p>Preço Atual: <span> ${(coin.priceUsd * cambioValor).toLocaleString('pt-BR', {style:"currency", currency:`${cambioSigla}`})}</span></p>
            <p>Fornecimento Atual: <span>${(coin.supply * cambioValor).toLocaleString('pt-BR', {style:"currency", currency:`${cambioSigla}`})}</span></p>
            <p>Fornecimento Max: <span>${(coin.maxSupply * cambioValor).toLocaleString('pt-BR', {style:"currency", currency:`${cambioSigla}`})}</span></p>`;

}

export {renderResult}