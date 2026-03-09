// file ini untuk penghubung antara UI HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);

        if(result.success) {
            localStorage.setItem("usernameLoggedIn", usernameByInput);
            console.log(result.message + result.username);
            return window.location.href = '../tasks.html';
        } else {
            alert('username not found, please sign up first');
            console.log(result.message);
        }
    });
});
