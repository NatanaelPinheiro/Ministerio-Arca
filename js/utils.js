const navMobile = document.querySelector('.navbar-mobile');
function toggleMenu(){
    navMobile.classList.toggle('active');
}

const navMobileLinks = document.querySelectorAll('.navbar-mobile--list--item a');
navMobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    })
});

const body = document.querySelector('body');
body.addEventListener('click', function(event){
    if(event.target.classList.contains("navbar-mobile") || event.target.classList.contains("menu-burger"))
        return;
    if(event.target.closest(".navbar-mobile") || event.target.closest(".menu-burger"))
        return;
    if(document.querySelector(".menu-burger-close"))
        navMobile.classList.remove('active');
});