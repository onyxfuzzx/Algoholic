// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });
});

// Dynamic Blob Effect
document.addEventListener("mousemove", (e) => {
    const blob = document.querySelector('.hero-blob');
    if (blob) {
        const x = (e.clientX / window.innerWidth - 0.5) * 100;
        const y = (e.clientY / window.innerHeight - 0.5) * 100;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Form Submission with Web3Forms
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    const result = document.getElementById("result");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append("access_key", "your-access-key"); // Ensure you add your API key here

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();
                if (data.success) {
                    result.textContent = "Thank you for your feedback!";
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

// Update the mobile menu toggle script
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links') && !e.target.closest('#mobile-menu')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});