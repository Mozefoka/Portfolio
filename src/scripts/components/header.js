'use strict';

const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const nav = document.querySelector(".header__nav");
const menu = document.querySelectorAll(".header__menu > li");
const scrollAbout = document.querySelector(".header__menu-scroll-about");
const scrollProjects = document.querySelector(".header__menu-scroll-projects");
const scrollContact = document.querySelector(".header__menu-scroll-contact");
const projectsTitle = document.querySelector(".projects__title");
const footer = document.querySelector(".footer");

burger.addEventListener('click', function() {
	burger.classList.toggle("header__burger--active");
	line1.classList.toggle("header__burger-line1--active");
	line2.classList.toggle("header__burger-line2--active");
	line3.classList.toggle("header__burger-line3--active");
	nav.classList.toggle("header__nav--active");
})

menu.forEach(menu => {
	menu.addEventListener("click", function() {
		nav.classList.remove("header__nav--active");
		line1.classList.remove("header__burger-line1--active");
		line2.classList.remove("header__burger-line2--active");
		line3.classList.remove("header__burger-line3--active");
	});
})

scrollAbout.addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		left: 0,
	});
})

scrollProjects.addEventListener('click', function() {
	projectsTitle.scrollIntoView({block: "start",});
})

scrollContact.addEventListener('click', function() {
	footer.scrollIntoView({block: "start",});
})