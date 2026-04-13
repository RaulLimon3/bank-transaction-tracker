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

// Calculamos nuestro balance
const calculateBalance = (transactions) => {
    // Guardamos la suma de los depositos y retiros de la cuenta
    const result = transactions.reduce((total, transaction) => {
        if (transaction.type === 'deposit') {
            total.deposit += transaction.amount;
        } else {
            total.withdrawal += transaction.amount;
        }
        return total;
    }, {deposit: 0, withdrawal: 0});
    
    return result.deposit - result.withdrawal;
}

export { addTransaction, calculateBalance };