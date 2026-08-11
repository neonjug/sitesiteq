const track = document.querySelector(".slider__track");
const slides = document.querySelectorAll(".slider__slide");

const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");

const dots = document.querySelectorAll(".slider__dot");

const currentSlide = document.querySelector("#currentSlide");
const totalSlides = document.querySelector("#totalSlides");

let currentIndex = 0;

const total = slides.length;

totalSlides.textContent = total;

function showSlide(index) {

    if (index < 0) {
        index = total - 1;
    }

    if (index >= total) {
        index = 0;
    }

    currentIndex = index;

    track.style.transform =
        "translateX(-" + (currentIndex * 100) + "%)";

    currentSlide.textContent = currentIndex + 1;

    dots.forEach(function(dot, i) {

        if (i === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });
}

/* КНОПКА НАЗАД */

prevButton.addEventListener("click", function() {

    showSlide(currentIndex - 1);

});

/* КНОПКА ВПЕРЁД */

nextButton.addEventListener("click", function() {

    showSlide(currentIndex + 1);

});

/* ТОЧКИ */

dots.forEach(function(dot) {

    dot.addEventListener("click", function() {

        const index = Number(
            dot.getAttribute("data-slide")
        );

        showSlide(index);

    });

});

/* СВАЙП НА ТЕЛЕФОНЕ */

let startX = 0;
let endX = 0;

track.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;

});

track.addEventListener("touchend", function(event) {

    endX = event.changedTouches[0].clientX;

    const difference = startX - endX;

    if (difference > 50) {
        showSlide(currentIndex + 1);
    }

    if (difference < -50) {
        showSlide(currentIndex - 1);
    }

});