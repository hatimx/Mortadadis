// Function to add the scroll functionality to all elements with a specific class
function addScrollFunctionality(selector) {
    const rows = document.querySelectorAll(selector);

    rows.forEach(row => {
        let isDown = false;
        let startX;
        let scrollLeft;

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            row.classList.add('active');
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
            e.preventDefault(); // Prevent default behavior
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
            row.classList.remove('active');
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
            row.classList.remove('active');
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault(); // Prevent default behavior
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            row.scrollLeft = scrollLeft - walk;
        });
    });
}
// Apply the scroll functionality to all elements with the class 'scrollable-row'
addScrollFunctionality('.scrollable-row');

const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('#nav');
const up = document.querySelector('.up');
const hader = document.querySelector('#header');

menuBtn.addEventListener("click", () => {
    if (!nav.classList.contains('show-menu')) {
        nav.classList.add('show-menu');
    } else {
        nav.classList.remove('show-menu');
    }
})
// Hide the button initially
up.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        up.style.display = 'flex';
    } else {
        up.style.display = 'none';
    }
});

up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

header.style.position = 'fixed'
