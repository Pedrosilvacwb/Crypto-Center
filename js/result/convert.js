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
    let coinConverted = cambioOptions[`${cambio}`]
   return coinConverted
};

export{getCoin, fetchCambio, convert}