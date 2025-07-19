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
        speed: 800
    });

    let flag = true;
    document.querySelectorAll('.navItem').forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (flag) {
                document.querySelector('#subNav').style.height = `${document.querySelector('#subNav').scrollHeight + 50}px`;
                document.querySelector('#subNav').style.paddingTop = '1rem';
                document.querySelector('main').style.filter = 'blur(2px)';
                document.querySelector('footer').style.filter = 'blur(2px)';
                flag = false;
            };
        });
    });

    document.querySelector('#subNav').addEventListener('mouseleave', () => {
        if (!document.querySelector('nav').matches(':hover')) {
            document.querySelector('#subNav').style.height = '0';
            document.querySelector('#subNav').style.paddingTop = '0';
            document.querySelector('main').style.filter = 'none';
            document.querySelector('footer').style.filter = 'none';
            flag = true;
        };
    });
});

// Carousel 2
const track = document.querySelector('.ticker-track');

// Duplicamos contenido para scroll infinito
track.innerHTML += track.innerHTML;

let position = 0;
let speed = 1.2; // píxeles por frame (~30px/s a 60fps)

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
    speed = 0.5; // más lento
});

wrapper.addEventListener('mouseleave', () => {
    speed = 1.2; // velocidad normal
});
