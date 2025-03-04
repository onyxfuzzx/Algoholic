// Hamburger Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.querySelector('.navbar-links');
    var bars = document.querySelectorAll('.bar');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    bars.forEach(bar => bar.classList.toggle('change'));
});

// Form Submission with Web3Forms
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    const result = document.getElementById("result");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append("access_key", "1b6da0c4-8ebc-4b53-adcf-1a6cdad9ee14"); // Ensure you add your API key here

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();
                if (data.success) {
                    result.textContent = "";
                    result.classList.add("success");
                    result.classList.remove("error");
                    form.reset();
                } else {
                    result.textContent = "Oops! Something went wrong. Please try again.";
                    result.classList.add("error");
                    result.classList.remove("success");
                }
            } catch (error) {
                result.textContent = "Oops! Something went wrong. Please try again.";
                result.classList.add("error");
                result.classList.remove("success");
            }
        });
    }
});

document.getElementById("feedback-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    let form = event.target;
    let formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        let result = await response.json();

        if (result.success) {
            // Show the popup
            document.getElementById("thankYouPopup").style.display = "block";

            // Reset the form after submission
            form.reset();
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        alert("Oops! Something went wrong. Please try again.");
    }
});

// Close the popup when clicking the close button
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("thankYouPopup").style.display = "none";
});

// Close popup when clicking outside the popup box
window.addEventListener("click", function(event) {
    let popup = document.getElementById("thankYouPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
