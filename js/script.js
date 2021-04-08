const chanel = new Swiper('.chanel-slider', {
    loop: true,
    slidesPerView: 4,
    
    // Navigation arrows
    navigation: {
      nextEl: '.chanel-button-next',
      prevEl: '.chanel-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
});


const recommended = new Swiper('.recommended-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    }
});

const chanelRecommended = new Swiper('.chanel-recommended-slider', {
    loop: true,
    slidesPerView: 4,
    
    // Navigation arrows
    navigation: {
      nextEl: '.chanel-recommended-button-next',
      prevEl: '.chanel-recommended-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
});