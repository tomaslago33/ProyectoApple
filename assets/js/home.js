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

    //Carousel 2
    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        freeModeMomentum: false,
        grabCursor: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 2000, // velocidad constante
    });

    const swiper2Container = document.querySelector('.swiper2');

    // Al hacer hover: velocidad más lenta
    swiper2Container.addEventListener('mouseenter', () => {
        swiper2.params.speed = 6000;
        swiper2.update(); // importante para que tome el cambio
        swiper2.autoplay.start(); // reinicia autoplay con nueva velocidad
    });

    swiper2Container.addEventListener('mouseleave', () => {
        swiper2.params.speed = 2000;
        swiper2.update();
        swiper2.autoplay.start();
    });
});
