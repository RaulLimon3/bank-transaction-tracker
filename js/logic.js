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

    // Mostramos los datos
    return transactions;
}

export { addTransaction };