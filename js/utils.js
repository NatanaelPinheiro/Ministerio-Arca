changeHeaderBackground(document.documentElement.scrollTop)
window.onscroll = function (e){
    let distanceScrolled = document.documentElement.scrollTop;
    changeHeaderBackground(distanceScrolled);
}

function changeHeaderBackground(distanceScrolled){
    const header = document.getElementById('header');
    const sectionSobreNos = document.getElementById('sobre-nos');
    const sectionAcoesSociais = document.getElementById('acoes-sociais');

    if(header){
        if(distanceScrolled > 80){
            header.classList.add('colorfull-bg');
        }else{
            header.classList.remove('colorfull-bg');
        }

        // if(sectionAcoesSociais.getBoundingClientRect().top <= 0 && sectionAcoesSociais.getBoundingClientRect().bottom >= 90){
        //     header.classList.remove('colorfull-bg');
        // }

    }

}


// ===============================

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

if(window.innerWidth >= 1024){
    var intervalId = window.setInterval(function(){
        checkSlideIndex();
    }, 100);
}

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

// ===============================

window.addEventListener('scroll', fadeUp);

function fadeUp(){
    let reveals = document.querySelectorAll('.fade-up');
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}