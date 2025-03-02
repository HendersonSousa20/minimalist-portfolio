document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {  const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver(entries => {    entries.forEach(entry => {      if (entry.isIntersecting) {        entry.target.classList.add('is-visible');      }    });  });
    animatedElements.forEach(element => {    observer.observe(element);  });});


    const cursor = document.getElementById("cursor");
        
    document.addEventListener("mousemove", (event) => {
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });