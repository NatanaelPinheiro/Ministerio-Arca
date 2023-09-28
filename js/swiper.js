var teams_swiper = new Swiper(".banner-swiper ", {
    loopedSlides: 1,
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    allowTouchMove: false,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
    },
});

var altar_swiper = new Swiper(".altar-swiper ", {
  loopedSlides: 2,
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  autoplay: false,
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  mousewheel: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});