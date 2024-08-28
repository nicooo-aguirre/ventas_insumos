let currentIndex = 0; // Define el índice actual del carrusel, comenzando en 0

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel'); // Selecciona el contenedor del carrusel
    const items = document.querySelectorAll('.carousel-item'); // Selecciona todos los elementos del carrusel
    const totalItems = items.length; // Obtiene el número total de elementos en el carrusel

    currentIndex += direction; // Actualiza el índice actual en función de la dirección (1 o -1)

    if (currentIndex < 0) { // Si el índice es menor que 0, se reinicia al último elemento
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) { // Si el índice excede el número de elementos, se reinicia al primero
        currentIndex = 0;
    }

    const offset = -currentIndex * 100; // Calcula el desplazamiento necesario en función del índice actual
    carousel.style.transform = `translateX(${offset}%)`; // Desplaza el contenedor del carrusel en el eje X
}