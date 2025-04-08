const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    const scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add('scrolled');
    } else if (scrollposition <= 60) {
        nav.classList.remove('scrolled');
    }
});