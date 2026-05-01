// about.js - Spesifik untuk statistik
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        const suffix = counter.innerText.replace(/[0-9]/g, ''); // Ambil tanda + atau %
        let count = 0;
        const speed = 2000 / target; // Durasi total 2 detik

        const updateCount = () => {
            if (count < target) {
                count++;
                counter.innerText = count + suffix;
                setTimeout(updateCount, speed);
            } else {
                counter.innerText = target + suffix;
            }
        };
        
        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);