// Counter Animation for Sustainability Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize counters when visible
document.addEventListener('DOMContentLoaded', function() {
    const numberElements = document.querySelectorAll('.stat-number[data-target]');
    const statsSection = document.querySelector('.sustainability-stats');

    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    numberElements.forEach(element => {
                        const target = parseInt(element.dataset.target);
                        animateCounter(element, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }
});
