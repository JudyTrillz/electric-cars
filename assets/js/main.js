/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // REMOVING THE MENU...
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");
const headerAction = () => {
  window.scrollY > 50
    ? header.classList.add("bg__header")
    : header.classList.remove("bg__header");
};
window.addEventListener("scroll", headerAction);

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

/* Link active featured */

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
