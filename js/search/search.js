import { renderOptions, cambioSelect } from "./renderOptions.js";
import { validateInput, handleSubmit, input } from "./submit.js";

const form = document.querySelector('form');


renderOptions();


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);