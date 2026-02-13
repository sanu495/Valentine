// Create floating hearts
function createFloatingHeart() {
    const container = document.querySelector('.floating-hearts');
    const heart = document.createElement('div');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.position = 'absolute';
    heart.style.fontSize = (Math.random() * 20 + 25) + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animation = `floatHeart ${Math.random() * 5 + 10}s linear forwards`;
    heart.style.opacity = '0.7';
    heart.style.bottom = '-50px';
    heart.style.filter = 'drop-shadow(0 0 8px rgba(255, 107, 157, 0.5))';
    
    container.appendChild(heart);
    
    setTimeout(() => heart.remove(), 15000);
}

// Add floating heart animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatHeart {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create hearts continuously
setInterval(createFloatingHeart, 400);

// Photo card click animation
document.querySelectorAll('.photo-card').forEach((card, index) => {
    card.style.transform = 'translateY(50px)';
    
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
        
        // Create hearts around the card
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createFloatingHeart(), i * 50);
        }
        
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
    });
});

// Add sparkle to quote
const quote = document.querySelector('.memory-quote');
quote.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.03)';
    this.style.boxShadow = '0 20px 70px rgba(0, 0, 0, 0.3)';
});

quote.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.2)';
});
