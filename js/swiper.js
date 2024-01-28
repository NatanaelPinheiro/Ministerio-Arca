// var teams_swiper = new Swiper(".banner-swiper ", {
//     loopedSlides: 1,
//     loop: true,
//     slidesPerView: 1,
//     freeMode: false,
//     autoplay: {
//       delay: 4000,
//     },
//     mousewheel: {
//       releaseOnEdges: true,
//     },
//     allowTouchMove: false,
//     mousewheel: false,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: false,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '"></span>';
//         },
//     },
// });

var altar_swiper = new Swiper(".altar-swiper ", {
  loopedSlides: 3,
  loop: true,
  slidesPerView: (window.innerWidth < 768 ) ? 'auto' : 1,
  spaceBetween: (window.innerWidth < 768 ) ? 20 : 0,
  freeMode: false,
  autoplay: (window.innerWidth < 768 ) ? false : {delay: 2500},
  centeredSlides: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  slideActiveClass: 'altar-slide-active',
  allowTouchMove: (window.innerWidth < 768 ) ? true : false,
  mousewheel: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var actions_swiper = new Swiper(".actions-swiper ", {
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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

let isTablet = window.innerWidth <= 860;
let isMobile = window.innerWidth <= 425;

var infinie_scroll = new Swiper("#infinite-scroll .swiper-container", {
  loopedSlides: isTablet ? isMobile ? 2 : 3 : 5,
  loop: true,
  slidesPerView: isTablet ? isMobile ? 1.5 : 2 : 3,
  freeMode: true,
  autoplay: {
    delay: 1500,
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  mousewheel: false,
});

var acoes_swiper = new Swiper("#acoes-sociais .swiper-container", {
  loopedSlides: isTablet ? isMobile ? 3 : 4 : 6,
  loop: true,
  slidesPerView: 1,
  freeMode: false,
  autoplay: {
    delay: 5000,
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: true,
  mousewheel: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
  },
});