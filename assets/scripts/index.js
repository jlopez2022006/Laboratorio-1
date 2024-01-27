document.addEventListener('DOMContentLoaded', function() {
    const botonToggle = document.getElementById('toggle-section');
    const seccionOculta = document.getElementById('seccion-oculta');

    botonToggle.addEventListener('click', function() {
        seccionOculta.classList.toggle('visible');
    });
});

