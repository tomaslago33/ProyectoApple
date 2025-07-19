const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Quitar clase activa a todos
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));

        // Activar el clickeado
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

const carousel = document.getElementById('cardCarousel');

function scrollLeft() {
  carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
}

function scrollRight() {
  carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
}