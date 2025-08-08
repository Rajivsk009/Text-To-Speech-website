// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    
    // Simple video card animation on load
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.3s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });
    
    // Mobile search toggle could be implemented here
});