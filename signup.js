document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmError').textContent = '';

    let isValid = true;

    // Email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        const response = await fetch('signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const result = await response.text();
        alert(result);
        if (result.includes("successful")) {
            window.location.href = 'login.html';
        }
    }
});
