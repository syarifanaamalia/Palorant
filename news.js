const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const toggleClose = document.querySelector('.menu-toggle-close');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleClose.classList.toggle('active');
    menuToggle.classList.toggle('hidden');
});

toggleClose.addEventListener('click', () => {
    navbar.classList.remove('active');
    toggleClose.classList.remove('active');
    menuToggle.classList.remove('hidden');
});