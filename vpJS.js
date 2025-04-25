//   Testimonials==============
var swiper = new Swiper(".mySwiperTest", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Keeps autoplay active after user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //   dynamicBullets: true,
    },
    centeredSlides: true, // Center the active slide

    slidesPerGroup: 1, // Moves slides one by one
    speed: 1000, // Smooth transition duration (in ms)
    effect: "slide",
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3 /*Product per slide*/,
        spaceBetween: 20 /*Gap*/,
      },
    },
  });
  
//   gallry crousel




// reveal
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));

  // loding

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1500);
  });



  // 
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    window.addEventListener('scroll', () => {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
      
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  });

  
  const hamburger = document.querySelector('.navbar-toggler');
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Function to close the menu
function closeMenu() {
    navbarCollapse.classList.remove('show');
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when scrolling
window.addEventListener('scroll', closeMenu);


