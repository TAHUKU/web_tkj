// materials.js - Interaksi kartu materi
function initMateriHover() {
    const cards = document.querySelectorAll('.materi-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderLeft = '8px solid #2563eb';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderLeft = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', initMateriHover);