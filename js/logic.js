import { transactions } from "./state.js";
import { validateInputs } from "./ui.js";

// Creamos las funciones principales para menjar los datos
const addTransaction = () => {
    // Extraemos los datos
    const data = validateInputs();
    // Validamos el campo
    if (!data) return;
    // Agregamos los datos
    transactions.unshift({
        type: data.type,
        amount: data.amount
    });

    // Limpiamos campo
    const form = document.getElementById('form');
    form.reset();
    document.querySelectorAll('.input').forEach(input => {
        input.classList.remove('input--danger');
    });

    // Mostramos los datos
    console.log(transactions);
}

export { addTransaction };