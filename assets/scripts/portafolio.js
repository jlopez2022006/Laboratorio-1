
// Función para cambiar el color de fondo
function changeBackgroundColor() {
    // Generamos un color aleatorio en formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Cambiamos el color de fondo de la página
    document.body.style.backgroundColor = randomColor;
}

// Obtenemos una referencia al botón
const changeColorButton = document.getElementById('change-color-btn');

// Asociamos la función al evento de clic del botón
changeColorButton.addEventListener('click', changeBackgroundColor);
