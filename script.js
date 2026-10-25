// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Interactive Carousel logic for Infographics Pages
document.querySelectorAll('.carousel-container').forEach(container => {
    const slides = container.querySelectorAll('.carousel-slide-area img');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    const counterDisplay = container.parentElement.querySelector('.current-idx');
    
    let currentIndex = 0;
    let autoSlideInterval = null;

    function updateCarousel(index) {
        slides.forEach(slide => slide.classList.remove('active-slide'));
        slides[index].classList.add('active-slide');
        if (counterDisplay) {
            counterDisplay.textContent = index + 1;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto Play Slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3500);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Hover Pause functionality
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);

    // Start auto slide initially
    startAutoSlide();
});
