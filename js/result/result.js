import { renderResult } from "./renderResult.js";


const btnReturn = document.querySelector('.voltar')

function pageReturn() {

    window.location = '../index.html'
}

btnReturn.addEventListener('click', pageReturn);

renderResult();