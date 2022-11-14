const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel--buttonforward');
const prevButton = document.querySelector('.carousel--buttonback');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// click left moves to the left
prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    
   moveToSlide(track, currentSlide, prevSlide);
})
 
// click right moves to right
nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
})     

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide =(track, currentSlide, targetSlide) => {
     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}



