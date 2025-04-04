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


