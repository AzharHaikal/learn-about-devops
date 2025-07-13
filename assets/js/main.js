// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          const nav = document.querySelector('nav');
          const navHeight = nav ? nav.offsetHeight : 0;

          const offsetTop = targetElement.offsetTop - navHeight;
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it appears
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    observer.observe(el);
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// No active link highlighting on scroll for the hero links as they are not a traditional nav
// The previous active link logic for the main nav has been removed.
