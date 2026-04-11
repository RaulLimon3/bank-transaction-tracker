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
export { validateInputs };