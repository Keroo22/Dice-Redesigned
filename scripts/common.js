// Navbar Active Indicator Animation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.nav-indicator');
    const navbar = document.querySelector('.navbar');

    function updateIndicator() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink && indicator) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = activeLink.closest('.nav-links').getBoundingClientRect();
            indicator.style.width = `${linkRect.width}px`;
            indicator.style.left = `${linkRect.left - navRect.left}px`;
        }
    }

    // Initial position
    updateIndicator();

    // Update on window resize
    window.addEventListener('resize', updateIndicator);

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
});
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
});

// close when clicking a link
menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("show"));
});

// close when clicking outside
document.addEventListener("click", () => {
    menu.classList.remove("show");
});
