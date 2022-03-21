const navBtn = document.querySelector('.navbar__burger-icon');
const navMenu = document.querySelector('.navbar__list')

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__list--active')
})