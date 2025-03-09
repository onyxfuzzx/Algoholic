document.getElementById('forgotForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('forgotEmail').value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        return;
    }

    const response = await fetch('forgot-password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}`
    });

    const result = await response.text();
    alert(result);

    if (result.includes("successful")) {
        window.location.href = 'login.html';
    }
});
