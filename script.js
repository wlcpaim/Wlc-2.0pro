document.addEventListener('DOMContentLoaded', () => {
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
                    label: 'ROI (%)',
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
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#020617',
                        borderColor: '#1e293b',
                        borderWidth: 1,
                        padding: 12
                    }
                },
                scales: {
                    y: { 
                        grid: { color: '#0f172a' }, 
                        ticks: { color: '#64748b' },
                        border: { display: false }
                    },
                    x: { 
                        grid: { display: false }, 
                        ticks: { color: '#64748b' },
                        border: { display: false }
                    }
                }
            }
        });
    }
});