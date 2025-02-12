// Intersection Observer for scroll animations
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

// Dynamic Blob Effect
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.hero-blob');
    if (blob) {
        const x = e.clientX / window.innerWidth * 50;
        const y = e.clientY / window.innerHeight * 50;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }
});

const form = document.getElementById("feedback-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        // Submit form data to Web3Forms
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                result.innerHTML = "Thank you for your feedback!";
                result.classList.add("success");
                result.classList.remove("error");
                form.reset(); // Clear the form
            } else {
                result.innerHTML = "Oops! Something went wrong. Please try again.";
                result.classList.add("error");
                result.classList.remove("success");
            }
        })
        .catch(error => {
            result.innerHTML = "Oops! Something went wrong. Please try again.";
            result.classList.add("error");
            result.classList.remove("success");
        });
    });