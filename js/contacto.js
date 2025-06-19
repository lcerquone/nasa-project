const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userEmail = emailInput.value;

    if (userEmail) {
        localStorage.setItem('userEmail', userEmail);

        mensajeConfirmacion.style.display = 'block';
        emailInput.value = '';

        setTimeout(() => {
            mensajeConfirmacion.style.display = 'none';
        }, 5000);
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        console.log('Correo guardado previamente:', storedEmail);
    }
});