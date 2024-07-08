
document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navMenu = document.querySelector('nav');
    var headerImg = document.querySelector('header img');
    navMenu.classList.toggle('active');
    headerImg.classList.toggle('nav-active');
});

document.addEventListener("DOMContentLoaded", function() {  const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver(entries => {    entries.forEach(entry => {      if (entry.isIntersecting) {        entry.target.classList.add('is-visible');      }    });  });
    animatedElements.forEach(element => {    observer.observe(element);  });});