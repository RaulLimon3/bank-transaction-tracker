// Importamos nuestros archivos
import { addTransaction, calculateBalance } from "./logic.js";
import { transactions } from "./state.js";
import { cleanInputs, renderBalance, renderTransaction } from "./ui.js";

// Accedemos a nuesto formulario
const form = document.getElementById('form');

// Mostramos nuestras transacciones
renderTransaction(transactions);
renderBalance(calculateBalance(transactions));

// Esperamos que el usuario envie el formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envie
    e.preventDefault();
    // Agrega la operación y actualizamos las transacciones
    const updateTransaction = addTransaction();
    if (!updateTransaction) return;
    // Mostramos el balance
    const balance = calculateBalance(updateTransaction);
    // Mostramos las nuevas transacciones
    renderTransaction(updateTransaction);
    renderBalance(balance);
    // Limpiamos los campos
    cleanInputs();
});
