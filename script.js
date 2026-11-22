document.addEventListener('DOMContentLoaded', () => {
    // Accordion Navigation Logic with Auto-Collapse & Smooth Height
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const btn = item.querySelector('button');
        const subMenu = item.querySelector('.sub-menu');
        
        btn.addEventListener('click', () => {
            const isClosed = !subMenu.style.maxHeight || subMenu.style.maxHeight === '0px';

            // Close all other submenus first (Auto Collapse)
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherSub = otherItem.querySelector('.sub-menu');
                    const otherBtn = otherItem.querySelector('button');
                    const otherChevron = otherBtn.querySelector('i:last-child');
                    
                    otherSub.style.maxHeight = '0px';
                    otherBtn.classList.remove('bg-indigo-600/10', 'border-indigo-500/20', 'text-white');
                    otherBtn.classList.add('text-slate-400', 'border-transparent');
                    
                    const icon = otherBtn.querySelector('i:first-child');
                    icon.classList.remove('text-indigo-400', 'scale-110');
                    icon.classList.add('text-slate-500');
                    
                    if (otherChevron) {
                        otherChevron.className = 'fa-solid fa-chevron-right text-[10px] text-slate-500 transition-transform duration-200';
                    }
                }
            });

            const chevron = btn.querySelector('i:last-child');
            const icon = btn.querySelector('i:first-child');

            if (isClosed) {
                // Open clicked submenu
                subMenu.style.maxHeight = subMenu.scrollHeight + 20 + 'px';
                btn.classList.add('bg-indigo-600/10', 'border-indigo-500/20', 'text-white');
                btn.classList.remove('text-slate-400', 'border-transparent');
                
                icon.classList.remove('text-slate-500');
                icon.classList.add('text-indigo-400', 'scale-110');
                
                if (chevron) {
                    chevron.className = 'fa-solid fa-chevron-down text-[10px] text-indigo-400 transition-transform duration-200';
                }
            } else {
                // Close clicked submenu
                subMenu.style.maxHeight = '0px';
                btn.classList.remove('bg-indigo-600/10', 'border-indigo-500/20', 'text-white');
                btn.classList.add('text-slate-400', 'border-transparent');
                
                icon.classList.remove('text-indigo-400', 'scale-110');
                icon.classList.add('text-slate-500');
                
                if (chevron) {
                    chevron.className = 'fa-solid fa-chevron-right text-[10px] text-slate-500 transition-transform duration-200';
                }
            }
        });
    });

    // Initialize first menu open correctly on load
    const firstSubMenu = document.querySelector('.nav-item .sub-menu');
    if (firstSubMenu) {
        firstSubMenu.style.maxHeight = firstSubMenu.scrollHeight + 20 + 'px';
    }

    // Mobile Sidebar Drawer Toggle Logic with robust visibility handling
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    function toggleSidebar() {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar on mobile when a submenu link is clicked
    const subMenuLinks = document.querySelectorAll('.sub-menu a');
    subMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                closeSidebar();
            }
        });
    });

    // Chart Logic
    const ctx = document.getElementById('roiChart');
    if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    data: [12, 19, 8, 15, 28, 38],
                    borderColor: '#6366f1',
                    backgroundColor: gradient,
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#6366f1',
                    pointBorderWidth: 2
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } },
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } }
                }
            }
        });
    }
});