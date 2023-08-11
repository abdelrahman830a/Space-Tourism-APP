window.addEventListener("scroll", function () {
  console.log(window.scrollY); // Value of scroll Y in px
});

const nav1 = document.querySelector(".nav__1");
const nav2 = document.querySelector(".nav__2");
const nav3 = document.querySelector(".nav__3");
const nav4 = document.querySelector(".nav__4");

const navActive = function () {
  if (window.scrollY === 0 || window.scrollY < 550) {
    nav1.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
  } else if (window.scrollY >= 550 && window.scrollY < 4000) {
    nav1.classList.remove("active");
    nav2.classList.add("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
  } else if (window.scrollY >= 4000 && window.scrollY < 7000) {
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.add("active");
    nav4.classList.remove("active");
  } else if (window.scrollY >= 7000) {
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.add("active");
  }
};

window.addEventListener("scroll", navActive); // Listen to scroll events
window.addEventListener("load", navActive); // Call navActive on load to handle initial state


/**
 * navbar mobile menu
 * */

const navbar = document.querySelector(".navbar");
const navbar__list = document.querySelector(".navbar__list");
const hamburger = document.querySelector(".hamburger");
const items = document.querySelectorAll('.navbar__list-item');

hamburger.addEventListener('click',  () => {
  navbar.classList.toggle('active');
  navbar__list.classList.toggle('active');
  hamburger.classList.toggle('active');
}) 


  // Toggle the menu when a list item is clicked
// Collapse the menu when clicking outside the navbar
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
    navbar__list.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
document.addEventListener("click", function (event) {
  if (navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
    navbar__list.classList.remove("active");
    hamburger.classList.remove("active");
  }
});






