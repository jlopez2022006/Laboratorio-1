document.addEventListener('DOMContentLoaded', function() {
    const botonesDescarga = document.querySelectorAll('.boton-descarga');
    
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace se abra
            // Aquí puedes agregar tu lógica para manejar el evento de clic
            alert('Has hecho clic en un botón de descarga.');
        });
    });
});