const navBtn = document.querySelector('.navbar__burger-icon');
const navMenu = document.querySelector('.navbar__list');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.navbar__list');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__list--active')
})

const closeMobileNav = () => {
	allNavItems.forEach( item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('navbar__list--active')
		})
	});
}


const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
closeMobileNav();