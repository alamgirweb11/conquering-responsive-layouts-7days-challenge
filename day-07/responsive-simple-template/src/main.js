let openMobileMenuIcon = document.querySelector('.mobile__menu-icon-show');
let closeMobileMenuIcon = document.querySelector('.mobile__menu-icon-hide');
let navbar = document.querySelector('.navbar__menu--section');

openMobileMenuIcon.addEventListener('click', () => {
       openMobileMenuIcon.classList.toggle('hide');
       closeMobileMenuIcon.classList.toggle('hide');
       navbar.classList.toggle('navbar__hidden')
});

closeMobileMenuIcon.addEventListener('click', () => {
       closeMobileMenuIcon.classList.toggle('hide');
       openMobileMenuIcon.classList.toggle('hide');
       navbar.classList.toggle('navbar__hidden')
});