document.addEventListener('DOMContentLoaded', () => {
    console.log('NexusSaaS System Initialized');
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-xl', 'border-indigo-900/20');
        } else {
            nav.classList.remove('shadow-xl', 'border-indigo-900/20');
        }
    });
});