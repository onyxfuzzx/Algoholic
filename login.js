document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Clear error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let isValid = true;

    // Email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }

    if (isValid) {
        const response = await fetch('login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const result = await response.text();
        alert(result);

        if (result.includes("successful")) {
            localStorage.setItem('authToken', 'true');
            window.location.href = 'index.html';
        }
    }
});
