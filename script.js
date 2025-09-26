const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Mobile menu open
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Mobile menu close
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}