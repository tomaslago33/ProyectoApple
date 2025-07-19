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
