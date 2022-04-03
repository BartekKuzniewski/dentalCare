const navBtn = document.querySelector('.navbar__burger-icon');
const navMenu = document.querySelector('.navbar__list');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.navbar__list');

navBtn.addEventListener('click', () => {
	navMenu.classList.toggle('navbar__list--active');
});

const closeMobileNav = () => {
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('navbar__list--active');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

function initMap() {
	// location
	const rolna = { lat: 52.176, lng: 21.026 };
	const domaniewska = { lat: 52.182, lng: 21.007};
	const centerPosition = {lat:52.177, lng: 21.016};
	
	// map
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: centerPosition,
	});

	// markers
	const marker = new google.maps.Marker({
		position: rolna,
		map: map,
	});

	const secondMarker = new google.maps.Marker({
		position: domaniewska,
		map: map,
	})
}

handleCurrentYear();
closeMobileNav();
