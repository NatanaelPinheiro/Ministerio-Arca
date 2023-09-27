var teams_swiper = new Swiper(".banner-swiper ", {
    loopedSlides: 1,
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    autoplay: {
      delay: 1500,
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    allowTouchMove: false,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
    },
});

var altar_swiper = new Swiper(".altar-swiper ", {
  loopedSlides: 1,
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  autoplay: false,
  // autoplay: {
  //   delay: 1500,
  // },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  mousewheel: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});