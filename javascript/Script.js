// JavaScript para el carrusel automático
function autoSlide() {
    const slides = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].checked = true;
    }

    setInterval(showNextSlide, 5000); // Cambia la imagen cada 5 segundos
}

document.addEventListener('DOMContentLoaded', autoSlide);

// Reloj funcional
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', updateClock);
