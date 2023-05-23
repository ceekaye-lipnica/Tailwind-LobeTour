const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});

const links = document.querySelectorAll(".footer-items h4");
links.forEach((baba) => {
	baba.addEventListener("click", () => {
		baba.nextElementSibling.classList.toggle("open");
		baba.querySelector("i").classList.toggle("open");
	});
});

const help = document.querySelectorAll(".welcome h4");
help.forEach((helpLink) => {
	helpLink.addEventListener("click", () => {
		helpLink.nextElementSibling.classList.toggle("open");
		helpLink.querySelector("i").classList.toggle("open");
	});
});