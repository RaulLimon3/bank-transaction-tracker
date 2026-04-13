import { transactions } from "./state.js";
import { validateInputs } from "./ui.js";

// Creamos las funciones principales para menjar los datos
const addTransaction = () => {
    // Extraemos los datos
    const data = validateInputs();
    // Validamos el campo
    if (!data) return;
    // Validamos si tiene saldo
    const result = calculateBalance(transactions);
    const balance = result.balance;
    if(!canMakeTransaction(data.type, data.amount, balance)) {
        alert('No tienes saldo suficiente');
        return;
    }
    // Agregamos los datos
    transactions.unshift({
        type: data.type,
        amount: data.amount
    });

    // Mostramos los datos
    return transactions;
};

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
    
    return {
        balance: result.deposit - result.withdrawal,
        deposit: result.deposit,
        withdrawal: result.withdrawal
    };
};

const canMakeTransaction = (type, amount, balance) => {
    if (type === 'withdrawal' && balance <= 0) {
        return false;
    }
    if (type === 'withdrawal' && amount > balance) {
        return false;
    }
    return true;
}

const filterTransaction = (transactions, type) => {
    // Mostramos todos los movimientos
    if (type === 'all') return transactions;
    // Filtramos por movimiento
    return transactions.filter(transaction => transaction.type === type);
}

export { addTransaction, calculateBalance, filterTransaction };