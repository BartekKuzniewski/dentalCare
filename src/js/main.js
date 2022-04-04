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
	const domaniewska = { lat: 52.182, lng: 21.007 };
	const centerPosition = { lat: 52.177, lng: 21.016 };

	// map
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: centerPosition,
	});

	// markers
	const rolnaStreet = new google.maps.Marker({
		position: rolna,
		map: map,
	});

	const domaniewskaStreet = new google.maps.Marker({
		position: domaniewska,
		map: map,
	});

	const rolnaInfoWindow = new google.maps.InfoWindow({
		content: `  <h4 class="contact__box-map-heading">Klinika Rolna</h4>
		<div class="contact__box-info--map">
		<i class="fa-solid fa-location-dot"></i>
		<p>Warszawa, ul. Rolna 1b</p>
	</div>
	<div class="contact__box-info--map">
		<i class="fa-solid fa-phone"></i>
		<p>+48 543 233 222</p>
	</div>
	<div class="contact__box-info--map">
		<i class="fa-solid fa-envelope"></i>
		<p>rolna@dentalcare.pl</p>
	</div>
		`,
	});

	const domaniewskaInfoWindow = new google.maps.InfoWindow({
		content: `<h4 class="contact__box-map-heading">Klinika Domaniewska</h4>
		<div class="contact__box-info--map">
		<i class="fa-solid fa-location-dot"></i>
		<p>Warszawa, ul. Domaniewska 21</p>
	</div>
	<div class="contact__box-info--map">
		<i class="fa-solid fa-phone"></i>
		<p>+48 543 233 333</p>
	</div>
	<div class="contact__box-info--map">
		<i class="fa-solid fa-envelope"></i>
		<p>domaniewska@dentalcare.pl</p>
	</div>
		`,
	});

	google.maps.event.addListener(rolnaStreet, 'click', () => {
		rolnaInfoWindow.open(map, rolnaStreet);
	});

	google.maps.event.addListener(domaniewskaStreet, 'click', () => {
		domaniewskaInfoWindow.open(map, domaniewskaStreet);
	});
}

handleCurrentYear();
closeMobileNav();
