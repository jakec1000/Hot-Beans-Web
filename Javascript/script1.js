let slideIndex = 1; // Initialize the slide index
showSlides(slideIndex); // Show the initial slide

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Wrap around to the first slide if at the end
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto-slide functionality
let slideInterval = setInterval(function() {
  plusSlides(1); // Advance to the next slide
}, 5000); // Change slide every 5000 milliseconds (5 seconds)

// Function to stop auto-slide when user interacts with controls
function pauseSlide() {
  clearInterval(slideInterval);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Adjust this value as needed

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});