document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.querySelector('.navbar-links');
    var bars = document.querySelectorAll('.bar');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    bars.forEach(bar => bar.classList.toggle('change'));
});