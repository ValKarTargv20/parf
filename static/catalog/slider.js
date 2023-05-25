/*elements*/
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
    //hide all slides exept first
    if(index !==0) {
        slide.classList.add('hidden');
    }

    //add indexes
    slide.dataset.index = index;

    //add data atribute active for first slide
    sliderItems[0].setAttribute('data-active', '');

    //click to slide
    slide.addEventListener('click', function () {
        showNextSlide('next');
    })
});

//set interval for automatic slider, where first function, then time, then paramentr
setInterval(showNextSlide,5000,'next');

//click on Next button
btnNext.onclick = function () {
    showNextSlide('next');
    setTimeout(showNextSlide,5000,'next');
};

//click on Previos button
btnPrev.onclick = function () {
    showNextSlide('prev');
    setTimeout(showNextSlide,5000,'prev');
};

//function for slideshow on click
function showNextSlide(direction) {
    //hide current slide
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (direction == 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction == 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    //show next slide
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}