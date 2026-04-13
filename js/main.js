// Importamos nuestros archivos
import { addTransaction, calculateBalance, filterTransaction } from "./logic.js";
import { transactions } from "./state.js";
import { cleanInputs, renderBalance, renderTransaction, toggleWithdrawalOption } from "./ui.js";

// Accedemos a nuesto formulario
const form = document.getElementById('form');

// Accedemos a nuestro elemento select para aplicar los filtros
const filterSelect = document.getElementById('filters');

// Establecemos que siempre muestre todos los movimientos
let currentFilter = 'all';

// Creamos una funcion para aplicar los filtros
const applyFilter = () => {
    // Establecemos los filtros a aplicar
    const filtered = filterTransaction(transactions, currentFilter);
    // Mostramos los movimientos
    renderTransaction(filtered);
}

// Obtenemos el valor para aplicar los filtros
filterSelect.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    applyFilter();
});

// Mostramos nuestras transacciones
renderTransaction(transactions);
const result = calculateBalance(transactions)
renderBalance(result.balance);
toggleWithdrawalOption(result.balance);

// Esperamos que el usuario envie el formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envie
    e.preventDefault();
    // Agrega la operación y actualizamos las transacciones
    const updateTransaction = addTransaction();
    if (!updateTransaction) return;
    // Mostramos el balance
    const { balance } = calculateBalance(updateTransaction);
    // Mostramos las nuevas transacciones
    renderTransaction(updateTransaction);
    renderBalance(balance);
    toggleWithdrawalOption(balance);
    applyFilter();
    // Limpiamos los campos
    cleanInputs();
});
