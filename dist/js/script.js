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


/* HELP TAB */
const helpNav = document.querySelectorAll(".help-tab__link");
const helpContent = document.querySelectorAll(".help-tab-contents");

helpNav.forEach((help) => {
	help.addEventListener("click", () => {
		removeActiveStar();
		help.classList.add("active");
		const activeContent = document.querySelector(`#${help.id}-contents`);
		removeActiveContent();
		activeContent.classList.add("active");
	});
});

function removeActiveStar() {
	helpNav.forEach((help) => {
		help.classList.remove("active");
	});
}

function removeActiveContent() {
	helpContent.forEach((help) => {
		help.classList.remove("active");
	});
}