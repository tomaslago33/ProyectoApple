document.addEventListener('DOMContentLoaded', () => {
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

    document.querySelectorAll('.navItem').forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.querySelector('#subNav').style.height = '350px';
            document.querySelector('#subNav').style.paddingTop = '1rem';
            document.querySelector('main').style.filter = 'blur(3px)';
            document.querySelector('footer').style.filter = 'blur(3px)';
        });
    });

    document.querySelector('#subNav').addEventListener('mouseleave', () => {
        if (!document.querySelector('nav').matches(':hover')) {
            document.querySelector('#subNav').style.height = '0';
            document.querySelector('#subNav').style.paddingTop = '0';
            document.querySelector('main').style.filter = 'none';
            document.querySelector('footer').style.filter = 'none';
        };
    });
});
