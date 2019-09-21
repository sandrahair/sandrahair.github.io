const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lista-nav');
    const navLinks = document.querySelectorAll('.lista-nav li');
    const hide = document.getElementById('hide-site');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

        //Hide Site
        if (nav.classList == "lista-nav nav-active" && burger.classList == "burger toggle") {
            hide.style.display = "none";
        } else {
            hide.style.display = "block";
        }

    });

}

navSlide();

const hideNavbar = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lista-nav');
    const navLinks = document.querySelectorAll('.lista-nav li');
    const hide = document.getElementById('hide-site');

    nav.classList.remove("nav-active")
    burger.classList.remove("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = '';
        }
    });

    hide.style.display = "block";
}

hideNavbar();


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Btn-Go-to-Top").style.display = "block";
    } else {
        document.getElementById("Btn-Go-to-Top").style.display = "none";
    }
}

//Smooth scrolling when clicking an anchor link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});