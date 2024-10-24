
//SCRIPT PARA LOS MENSAJES DE SWEET ALERT
// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        success: params.get('success'),
        update: params.get('update')
    }
}

// Usamos la función y agregamos condicionales if
const queryParams = getQueryParams();

// Si el parámetro 'success' está presente y es 'true', mostrar el mensaje
if (queryParams.success === 'true') {
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Jugador creado exitosamente',
        showConfirmButton: false,
        timer: 1500
    });
    
    // Opcionalmente, limpiar la URL para no volver a mostrar el mensaje
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, newUrl);
}

if (queryParams.update === 'true') {
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Jugador actualizado exitosamente',
        showConfirmButton: false,
        timer: 1500
    });
    
    // Opcionalmente, limpiar la URL para no volver a mostrar el mensaje
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, newUrl);
}


function confirmDelete(idPlayer) {
    Swal.fire({
        title: "¿Estás seguro que deseas eliminar este jugador?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Si se confirma, redirigimos para eliminar el jugador
            fetch(`/jugadores/eliminar/${idPlayer}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El jugador ha sido eliminado.",
                        icon: "success",
                        showConfirmButton: false, // Ocultamos el botón de confirmación
                        timer: 1500 // El SweetAlert se cierra automáticamente después de 1.5 segundos
                    }).then(() => {
                        window.location.reload(); // Recargar la página para ver los cambios
                    });
                } else {
                    Swal.fire("Error", "Hubo un problema al eliminar el jugador.", "error");
                }
            })
            .catch(error => {
                Swal.fire("Error", "Hubo un problema con la solicitud.", "error");
            });
        }
    });
}

// Capturamos el evento del formulario para mostrar SweetAlert
document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenimos el envío automático del formulario

    Swal.fire({
        title: '¿Deseas guardar los cambios?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, enviamos el formulario
            this.submit(); // Enviamos el formulario manualmente
        }
    });
});