document.addEventListener('DOMContentLoaded', () => {
    // Accordion Navigation Logic
    const navItems = document.querySelectorAll('.nav-item > button');
    
    navItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;
            const subMenu = parent.querySelector('.sub-menu');
            const isClosed = subMenu.classList.contains('hidden');

            // Close others
            document.querySelectorAll('.sub-menu').forEach(m => m.classList.add('hidden'));
            document.querySelectorAll('.nav-item > button i.fa-chevron-down').forEach(i => {
                i.className = 'fa-solid fa-chevron-right text-[10px]';
            });

            if (isClosed) {
                subMenu.classList.remove('hidden');
                btn.querySelector('i:last-child').className = 'fa-solid fa-chevron-down text-[10px]';
            }
        });
    });

    // Chart Logic
    const ctx = document.getElementById('roiChart');
    if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    data: [12, 19, 3, 5, 25, 32],
                    borderColor: '#6366f1',
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffffff'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }
});