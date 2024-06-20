
document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navMenu = document.querySelector('nav');
    var headerImg = document.querySelector('header img');
    navMenu.classList.toggle('active');
    headerImg.classList.toggle('nav-active');
});
