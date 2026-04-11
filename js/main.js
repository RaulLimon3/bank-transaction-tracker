// Importamos nuestros archivos
import { addTransaction } from "./logic.js";

// Accedemos a nuesto formulario
const form = document.getElementById('form');

// Esperamos que el usuario envie el formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envie
    e.preventDefault();
    // Agrega la operación y muestra la transacción
    addTransaction();
});
