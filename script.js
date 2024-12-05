const indicator = document.querySelector(".header-indicator-wrapper-line-wrapper-stroke")

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    indicator.style.top = `${scrollPercentage}%`;
})

document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.main-explore-slider-wrapper');
    const carouselSlides = document.querySelectorAll('.main-explore-slider-wrapper-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const paginationContainer = document.querySelector('.main-explore-slider-pagination');

    const totalSlides = carouselSlides.length;
    const slidesToShow = 3;
    const totalViews = totalSlides - slidesToShow + 1;
    let currentIndex = 0;

    const gap = parseInt(getComputedStyle(carouselWrapper).gap);
    const slideWidth = carouselSlides[0].offsetWidth + gap;

    for (let i = 0; i < totalViews; i++) {
        const dot = document.createElement('div');
        dot.classList.add('main-explore-slider-pagination-dot');
        dot.addEventListener('click', () => {
            showSlide(i);
        });
        paginationContainer.appendChild(dot);
    }

    const paginationDots = document.querySelectorAll('.main-explore-slider-pagination-dot');

    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showSlide(index) {
        if (index < 0) {
            currentIndex = 0;
        } else if (index >= totalViews) {
            currentIndex = totalViews - 1;
        } else {
            currentIndex = index;
        }

        carouselWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updatePagination();
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});

const menu = document.querySelector(".header-menu")
const show = document.querySelector(".header-nav-toolbar-burger")
const hide = document.querySelector(".header-menu-top-close")

show.addEventListener("click", function () {
    menu.classList.add("header-menu-show")
})

hide.addEventListener("click", function () {
    menu.classList.remove("header-menu-show")
})