async function loadTeachers() {
    try {
        // Mengambil data dari Back-End (server.js)
        const response = await fetch('/api/teachers');
        const teachers = await response.json();
        
        const container = document.getElementById('teachers-container');
        if (container) {
            container.innerHTML = teachers.map(teacher => `
                <div class="card">
                    <img src="/images/teachers/${teacher.photo}" alt="${teacher.name}" 
                         class="card-img" onerror="this.src='/images/default.jpg'" 
                         style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                    <div class="card-content">
                        <h3 class="card-title" style="font-size: 1.1rem;">${teacher.name}</h3>
                        <p style="color: #64748b;">${teacher.subject}</p>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Gagal memuat data guru:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadTeachers);