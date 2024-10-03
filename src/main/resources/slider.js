document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);
});
