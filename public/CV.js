// downloadCV() and goto() are kept for old links and bookmarks that still call them.
function downloadCV() {
    window.location.href = 'Evgeny Musatov-CV.docx';
}

function goto(page) {
    if (page) {
        window.location.href = page;
    }
}

// Light / dark toggle. Dark is the default; the choice is remembered in this browser.
(function () {
    var button = document.getElementById('mode-toggle');
    if (!button) return;
    var root = document.documentElement;
    var icon = document.getElementById('tab-icon');
    function render() {
        var light = root.dataset.mode === 'light';
        button.textContent = light ? 'Dark mode' : 'Light mode';
        button.setAttribute('aria-pressed', light ? 'true' : 'false');
        // The tab icon follows the mode: lime E for dark, aqua E for light.
        // Browsers only redraw the tab icon for a new link element with a new URL, so swap the element.
        if (icon) {
            var fresh = icon.cloneNode();
            fresh.href = (light ? './public/pics/icon-light.svg' : './public/pics/icon.svg') + '?m=' + Date.now();
            icon.remove();
            document.head.appendChild(fresh);
            icon = fresh;
        }
    }
    button.hidden = false;
    render();
    button.addEventListener('click', function () {
        if (root.dataset.mode === 'light') delete root.dataset.mode; else root.dataset.mode = 'light';
        try { localStorage.setItem('mode', root.dataset.mode || 'dark'); } catch (e) {}
        render();
    });
})();

// Section highlight: the CSS plays it when a section becomes the link target.
// Clicking the same link again does not change the target, so replay it here.
document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link || link.getAttribute('href') !== location.hash) return;
    var section = document.querySelector('.layout ' + location.hash);
    if (!section) return;
    section.style.animation = 'none';
    void section.offsetWidth;   // let the browser drop the old run before replaying
    section.style.animation = '';
});
