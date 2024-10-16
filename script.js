let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length; // Get total slides count

    // Ensure the index wraps around
    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop to last slide
    } else {
        currentSlide = index; // Set to the current index
    }

    // Calculate offset for sliding effect
    const offset = -currentSlide * 100; 
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Optionally, auto-change slides every few seconds
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds
