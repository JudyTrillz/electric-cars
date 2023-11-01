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
let mixer = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active featured */
const featuredLinks = document.querySelectorAll(".featured__item");

function activeFeatured() {
  featuredLinks.forEach((link) => link.classList.remove("active-featured"));
  this.classList.add("active-featured");
}

featuredLinks.forEach((link) => link.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
