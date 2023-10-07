const navMobile = document.querySelector('.navbar-mobile');
function toggleMenu(){
    navMobile.classList.toggle('active');
}

// ===============================

const navMobileLinks = document.querySelectorAll('.navbar-mobile--list--item a');
navMobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    })
});

// ===============================

const body = document.querySelector('body');
body.addEventListener('click', function(event){
    if(event.target.classList.contains("navbar-mobile") || event.target.classList.contains("menu-burger"))
        return;
    if(event.target.closest(".navbar-mobile") || event.target.closest(".menu-burger"))
        return;
    if(document.querySelector(".menu-burger-close"))
        navMobile.classList.remove('active');
});

// ===============================

let slides;
let slideTextNumber;

var intervalId = window.setInterval(function(){
    checkSlideIndex();
}, 100);

function checkSlideIndex(){
    let slideActive = document.querySelector('.altar-slide-active');
    if(slideActive.querySelector('.slide-1') !== null){
        slideTextNumber = 1;
    }
    if(slideActive.querySelector('.slide-2') !== null){
        slideTextNumber = 2;
    }
    if(slideActive.querySelector('.slide-3') !== null){
        slideTextNumber = 3;
    }
    if(slideActive.querySelector('.slide-4') !== null){
        slideTextNumber = 4;
    }
    let slideText = document.querySelectorAll('.slide-text');
    if(slideText){
        slideText.forEach((slide) => {
            if(!slide.classList.contains(`.slide-text-${slideTextNumber}`)){
                slide.style.display = 'none';
            }
        })
    }
    let slideTextActive = document.querySelector(`.slide-text-${slideTextNumber}`);
    if(slideTextActive){
        slideTextActive.style.display = 'inline-block';
    }
}