const cambioSelect = document.querySelector('#cambio');

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

async function fetchCambio(){

    let cambio = await (await fetch('https://open.er-api.com/v6/latest/USD')).json();

    return cambio;

}


export {renderOptions, cambioSelect};