document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.brands-track');

    if (track) {
        const originalItems = Array.from(track.children);

        for (let setIndex = 0; setIndex < 2; setIndex++) {
            originalItems.forEach(item => {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                track.appendChild(clone);
            });
        }

        track.classList.add('is-ready');
    }

    console.log('Apparel page loaded');
});
