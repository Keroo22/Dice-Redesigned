// Counter Animation
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
    const numberElements = document.querySelectorAll('.number[data-target]');
    const impactSection = document.querySelector('.impact-numbers');

    if (impactSection) {
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
        }, { threshold: 0.5 });

        observer.observe(impactSection);
    }
});
