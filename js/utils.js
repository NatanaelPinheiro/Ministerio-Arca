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