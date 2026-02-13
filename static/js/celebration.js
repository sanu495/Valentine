// Create fireworks
function createFirework(x, y) {
    const colors = ['#ff6b9d', '#667eea', '#764ba2', '#f093fb', '#ffd700', '#ff4d7d'];
    const fireworksContainer = document.querySelector('.fireworks-container');
    
    for (let i = 0; i < 35; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        const angle = (Math.PI * 2 * i) / 35;
        const velocity = 50 + Math.random() * 60;
        const x_vel = Math.cos(angle) * velocity;
        const y_vel = Math.sin(angle) * velocity;
        
        firework.style.setProperty('--x', `${x_vel}px`);
        firework.style.setProperty('--y', `${y_vel}px`);
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1200);
    }
}

// Create random fireworks
function randomFireworks() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.7);
    createFirework(x, y);
}

// Start fireworks show
setInterval(randomFireworks, 1000);

// Initial burst of fireworks
for (let i = 0; i < 5; i++) {
    setTimeout(randomFireworks, i * 200);
}

// Create falling hearts
function createFallingHeart() {
    const heartsRain = document.querySelector('.hearts-rain');
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞'][Math.floor(Math.random() * 7)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsRain.appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
}

// Create hearts continuously
setInterval(createFallingHeart, 200);

// Add sparkle effect to buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        // Create sparkles around button
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.fontSize = '22px';
                sparkle.style.left = (Math.random() * 100) + '%';
                sparkle.style.top = (Math.random() * 100) + '%';
                sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
                sparkle.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
        }
    });
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 40 - 20}px, -35px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Confetti burst on page load
function createConfetti() {
    const colors = ['#ff6b9d', '#667eea', '#764ba2', '#f093fb', '#ffd700'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '12px';
            confetti.style.height = '12px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            confetti.style.zIndex = '999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 20);
    }
}

// Confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Trigger confetti on load
window.addEventListener('load', () => {
    createConfetti();
    setTimeout(createConfetti, 1500);
});

// Make emojis interactive
document.querySelectorAll('.celebrate-emoji, .dance').forEach(emoji => {
    emoji.addEventListener('click', function() {
        this.style.transform = 'scale(2.2) rotate(360deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
        
        // Create mini firework at emoji position
        const rect = this.getBoundingClientRect();
        createFirework(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
});
