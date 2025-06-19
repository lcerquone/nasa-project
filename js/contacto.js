// Obtenemos una referencia al formulario y al campo de email
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

// Añadimos un "escuchador de eventos" para cuando se envíe el formulario
emailForm.addEventListener('submit', function(event) {
    // Evitamos que el formulario se envíe de la manera tradicional (recargar la página)
    event.preventDefault();

    // Obtenemos el valor del campo de email
    const userEmail = emailInput.value;

    // Verificamos si el correo no está vacío (aunque el atributo 'required' ya lo hace en HTML)
    if (userEmail) {
        // Guardamos el correo en el Local Storage
        // La clave será 'userEmail' y el valor será el correo ingresado
        localStorage.setItem('userEmail', userEmail);

        // Mostramos un mensaje de confirmación al usuario
        mensajeConfirmacion.style.display = 'block'; // Hacemos visible el mensaje
        emailInput.value = ''; // Limpiamos el campo de entrada

        // Opcional: Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            mensajeConfirmacion.style.display = 'none';
        }, 5000); // El mensaje se ocultará después de 3 segundos
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

// Opcional: Cuando la página cargue, puedes comprobar si ya hay un correo guardado
// y mostrarlo en el campo o en otro lugar.
document.addEventListener('DOMContentLoaded', function() {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        // emailInput.value = storedEmail; // Puedes precargar el campo con el correo guardado
        console.log('Correo guardado previamente:', storedEmail);
        // Si no quieres mostrarlo en el campo, puedes mostrarlo en otro div, etc.
    }
});