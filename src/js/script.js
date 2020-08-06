const headerNav = document.querySelector('.header-main__nav-list'),
    logo = document.querySelector('.logo'),
    burgerBtn = document.querySelector('.ham'),
    body = document.body,
    navLinks = headerNav.querySelectorAll('.header-main__nav-link');

burgerBtn.addEventListener('click' , function() {
    this.classList.toggle('active');
    headerNav.classList.toggle('active');
    logo.classList.toggle('hide');
    body.classList.toggle('lock');
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click' , function() {
        headerNav.classList.remove('active');
        logo.classList.remove('hide');
        body.classList.remove('lock');
        burgerBtn.classList.remove('active');
    });
}