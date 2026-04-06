// main.js

// Sticky Navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Skip links like "#"
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetClass = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetClass);
        
        if (targetElement) {
            // Adjust offset for navbar
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class to trigger CSS animation
            entry.target.classList.add('visible');
            // Unobserve after animating once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements with animation classes
const animatedElements = document.querySelectorAll('.fade-in, .fade-up');

animatedElements.forEach(el => {
    observer.observe(el);
});

// Initialize Swiper.js for premium showcase
const swiper = new Swiper('.clientSwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

console.log('Inusual Agency website initialized.');
