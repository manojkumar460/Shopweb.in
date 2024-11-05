let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.querySelector(".hamburger");
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
}


function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    // Toggle dark theme class on body
    body.classList.toggle('dark-theme');
    
    // Update icon
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Switch to moon icon
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Switch back to sun icon
    }
}




