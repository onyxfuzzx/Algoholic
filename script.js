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

// Jupiter notebook
document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the iframe size
    function adjustIframeSize() {
        const iframe = document.querySelector('.jupyter-notebook');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '800px'; // Set a default height

            // Optionally, adjust height based on content
            iframe.onload = function() {
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            };
        }
    }

    // Adjust iframe size on window resize
    window.addEventListener('resize', adjustIframeSize);

    // Initial adjustment
    adjustIframeSize();
});

// script.js
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const code = codeBlock.innerText;
    navigator.clipboard.writeText(code).then(() => {
        showCopyNotification();
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}

function showCopyNotification() {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
        </svg>
        Copied to clipboard!
    `;

    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// mouse

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      // Calculate mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Update CSS variables for gradient position
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  
    // Optional: Reset position when mouse leaves
    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--x');
      card.style.removeProperty('--y');
    });
  });

  // Add to your script.js
