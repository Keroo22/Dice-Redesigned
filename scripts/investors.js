// Investor Relations Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.ir-tab');
    const tabContents = document.querySelectorAll('.ir-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Scroll to content
            const contentWrapper = document.querySelector('.ir-content-wrapper');
            const offset = 150;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = contentWrapper.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Handle deep linking (if URL has a hash)
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetTab = document.querySelector(`.ir-tab[data-tab="${hash}"]`);
        if (targetTab) {
            targetTab.click();
        }
    }
});
    const tabs = document.querySelectorAll(".ir-tabs button");
    const panels = document.querySelectorAll(".ir-panel");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
      });
    });