"use strict";

const toggleBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});

navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");
}))