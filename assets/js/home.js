document.addEventListener('DOMContentLoaded', () => {
    // Carousel 1
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 6,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        speed: 800,
    });
});

// Carousel 2
const track = document.querySelector('.ticker-track');

// Duplicamos contenido para scroll infinito
track.innerHTML += track.innerHTML;

let position = 0;
let speed = 0.8; // píxeles por frame (~30px/s a 60fps)

function animate() {
    position -= speed;

    // Cuando llega al final de la primera mitad, reseteamos
    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

animate();

// Cambiar velocidad con hover
const wrapper = document.querySelector('.ticker-wrapper');

wrapper.addEventListener('mouseenter', () => {
    speed = 0.3; // más lento
});

wrapper.addEventListener('mouseleave', () => {
    speed = 0.8; // velocidad normal
});

