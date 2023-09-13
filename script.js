/* ========  toggle icon navber =========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ========  scroll reveal =========== */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, a', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

/* ========  type js =========== */

const type = new Typed('.multiple-text',{
    strings:['Student', 'Front-end Developer', 'Touring Boy'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})