const previousArrow = document.querySelector('.previous-arrow');
const nextArrow = document.querySelector('.next-arrow');

let slides = document.querySelectorAll('.slide');

let currentSlide = 0;

previousArrow.addEventListener('click', function() {
    if (slides[0].classList.contains('show')) {
        return;
    } else {
        currentSlide --;
        hideShowingSlide();
        showSlide();
        activateOrInactivateArrow();
    }
})

nextArrow.addEventListener('click', function() {
    if (slides[slides.length - 1].classList.contains('show')) {
        return;
    } else {
        currentSlide ++;
        hideShowingSlide();
        showSlide();
        activateOrInactivateArrow();
    }
})

function showSlide() {
    slides[currentSlide].classList.add('show');
}

function hideShowingSlide() {
    const slideWithShow = document.querySelector('.show');
    slideWithShow.classList.remove('show');
}

function activateOrInactivateArrow() {
    if (currentSlide === 0) {
        previousArrow.classList.add('inactive');
    } else {
        previousArrow.classList.remove('inactive');
    }

    if (currentSlide === (slides.length - 1)) {
        nextArrow.classList.add('inactive');
    } else {
        nextArrow.classList.remove('inactive');
    }
}