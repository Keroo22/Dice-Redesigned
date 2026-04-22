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

// ============================================================
// POPUP — add to sustainability.js (replaces old popup code)
// ============================================================

(function () {
    const popup    = document.getElementById('certPopup');
    const bigImg   = document.getElementById('bigImg');
    const popTitle = document.getElementById('popupTitle');
    const popDesc  = document.getElementById('popupDesc');
    const closeBtn = document.getElementById('closeBtn');

    // Open popup when any certification-item is clicked
    document.querySelectorAll('.certification-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const imgSrc = this.dataset.img  || '';
            const title  = this.dataset.title || this.querySelector('.certification-badge').textContent.trim();
            const desc   = this.dataset.desc  || '';

            popTitle.textContent = title;
            popDesc.textContent  = desc;

            if (imgSrc) {
                bigImg.src = imgSrc;
                bigImg.alt = title;
                bigImg.classList.remove('no-image');

                // Hide image gracefully if file doesn't exist
                bigImg.onerror = function () {
                    this.classList.add('no-image');
                };
            } else {
                bigImg.classList.add('no-image');
            }

            popup.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent background scroll
        });
    });

    // Close on × button
    closeBtn.addEventListener('click', closePopup);

    // Close when clicking the dark overlay (but not the card itself)
    popup.addEventListener('click', function (e) {
        if (e.target === popup) closePopup();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closePopup();
    });

    function closePopup() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        bigImg.src = ''; // free memory
    }
})();
