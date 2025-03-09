// Check if user is logged in
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = 'login.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}

// Redirect if already logged in
function redirectIfLoggedIn() {
    const token = localStorage.getItem('authToken');
    if (token) {
        window.location.href = 'index.html';
    }
}

// UI Update
function updateAuthUI() {
    const isLoggedIn = !!localStorage.getItem('authToken');
    document.querySelector('.guest-buttons').style.display = isLoggedIn ? 'none' : 'flex';
    document.querySelector('.user-buttons').style.display = isLoggedIn ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', updateAuthUI);
