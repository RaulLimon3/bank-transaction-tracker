// Validamos los campos
const validateInputs = () => {
    // Accedemos a nuestos elementos
    const selec = document.querySelector('input[name="type"]:checked');
    const amount = document.getElementById('amount');

    // Verificamos que el usuario seleccione una opción
    if (!selec) {
        alert('Seleccione una opción');
        return null;
    }

    if (amount.value.trim() === '') {
        amount.classList.add('input--danger');
        return null;
    }

    amount.classList.remove('input--danger');

    return {
        type: selec.value,
        amount: Number(amount.value)
    };
}

// Limpiar campos
const cleanInputs = () => {
    const form = document.getElementById('form');
    form.reset();
    document.querySelectorAll('.input').forEach(input => {
        input.classList.remove('input--danger');
    });
}

// Mostramos los resultados en pantalla
const renderTransaction = (transactions) => {
    // Accedemos a nuestros elementos
    const history = document.getElementById('history');

    // Limpiamos pantalla 
    history.innerHTML = '';

    // Verificamos si no hay algun registro
    if (transactions.length === 0) {
        // Agregamos nuestra clase al contenedor
        history.classList.add('history--none');
        // Creamos nuestro elemenot padre
        const li = document.createElement('li');
        // Creamos nuestro elemento hijo
        const message = document.createElement('span')
        // Agregamos el contenido
        message.textContent = 'No transactions yet. Add one!';

        // Mostramos el contenido
        li.appendChild(message);
        history.appendChild(li);
        return;
    }

    // Si existe un registro, quitamos el mensaje
    history.classList.remove('history--none');

    // Recorremos nuestras transacciones
    transactions.forEach(transaction => {
        // Creamos nuestros contenedor
        const li = document.createElement('li');
        // Establecemos que sea un depostio la transacction
        const isDeposit = transaction.type === 'deposit';
        li.classList.add('transaction', isDeposit ? 'transaction--deposit' : 'transaction--withdrawal');
        // Creamos nuestro contenido
        const div = document.createElement('div');
        div.classList.add('transaction__content');
        div.innerHTML = `
            <span>${transaction.type}</span>
            <span>${isDeposit ? '+' : '-'}$${formatAmount(transaction.amount)}</span>
        `;
        // Mostramos nuestro contenido
        li.appendChild(div);
        history.appendChild(li);
    });
};

// Agregamos formato 
const formatAmount = (amount) => {
    return amount.toFixed(2);
};

// Mostramos nuestro balance total
const renderBalance = (balance) => {
    // Accedemos a nuestro elemento
    const balanceRender = document.getElementById('balance');
    // Cambiamos el valor
    balanceRender.textContent = `$${formatAmount(balance)}`;
};


// El campo pierde el foco
let touched = false;
// Accedemos a nuestro elemento
const amount = document.getElementById('amount');
// Esperamos a que el usuario este en el campo
amount.addEventListener('focus', () => touched = true);

// Cuando el usuario sale del input se le notifica al usuario
amount.addEventListener('blur', () => {
    if (touched && amount.value.trim() === '') {
        amount.classList.add('input--danger');
    } else {
        amount.classList.remove('input--danger');
    }
});

// Exportamos nuestra funcion
export { validateInputs, renderTransaction, cleanInputs, renderBalance };