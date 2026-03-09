// js/auth.js
(function() {
    const validPages = ['tasks.html', 'add-task.html', 'signin.html', 'add-user.html', ''];
    let currentPath = window.location.pathname.split('/').pop();
    currentPath = currentPath.split('?')[0].split('#')[0]; // strip parameters if any
    
    if (currentPath === '') {
        currentPath = 'tasks.html';
    }

    const isLoggedIn = localStorage.getItem('usernameLoggedIn');

    if (!validPages.includes(currentPath)) {
        window.location.replace(isLoggedIn ? 'tasks.html' : 'signin.html');
        return;
    }

    if (isLoggedIn) {
        if (currentPath === 'signin.html' || currentPath === 'add-user.html') {
            window.location.replace('tasks.html');
            return;
        }
    } else {
        if (currentPath !== 'signin.html' && currentPath !== 'add-user.html') {
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
                    if (pageName && pageName.endsWith('.html') && !validPages.includes(pageName)) {
                        e.preventDefault();
                        window.location.replace(isLoggedIn ? 'tasks.html' : 'signin.html');
                    }
                }
            }
        });
    });
})();
