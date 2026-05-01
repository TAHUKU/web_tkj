// index.js - Spesifik untuk Beranda
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;

    const text = heroTitle.innerText;
    heroTitle.innerText = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
});