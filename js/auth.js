// js/auth.js
(function() {
    const pages = ['index', 'tasks', 'add-task', 'signin', 'add-user'];
    
    let currentPath = window.location.pathname.split('/').pop();
    currentPath = currentPath.split('?')[0].split('#')[0]; // strip parameters if any
    
    // Normalize: remove .html extension for comparison
    const normalizedPage = currentPath.replace(/\.html$/, '');
    const isLoggedIn = localStorage.getItem('usernameLoggedIn');

    // If we are at the root (empty path) or at index, redirect based on auth status
    if (normalizedPage === '' || normalizedPage === 'index') {
        window.location.replace(isLoggedIn ? 'tasks.html' : 'signin.html');
        return;
    }

    if (!pages.includes(normalizedPage)) {
        window.location.replace(isLoggedIn ? 'tasks.html' : 'signin.html');
        return;
    }

    if (isLoggedIn) {
        if (normalizedPage === 'signin' || normalizedPage === 'add-user') {
            window.location.replace('tasks.html');
            return;
        }
    } else {
        if (normalizedPage !== 'signin' && normalizedPage !== 'add-user') {
            window.location.replace('signin.html');
            return;
        }
    }

    // Intercept link clicks to prevent "File not found" errors when opened via file:// protocol
    document.addEventListener('DOMContentLoaded', () => {
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('#')) {
                    const pageName = href.split('?')[0].split('#')[0].split('/').pop();
                    const normalizedTarget = pageName.replace(/\.html$/, '');
                    if (normalizedTarget && !pages.includes(normalizedTarget)) {
                        e.preventDefault();
                        window.location.replace(isLoggedIn ? 'tasks.html' : 'signin.html');
                    }
                }
            }
        });
    });
})();
