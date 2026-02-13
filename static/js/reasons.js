// DOM Elements
const heartButton = document.getElementById('heartButton');
const reasonText = document.getElementById('reasonText');
const reasonCounter = document.getElementById('reasonCounter');
const revealBtn = document.getElementById('revealBtn');
const reasonsGrid = document.getElementById('reasonsGrid');

let usedReasons = [];
let clickCount = 0;

// Create animated background particles
function createParticle() {
    const animatedBg = document.querySelector('.animated-bg');
    const particle = document.createElement('div');
    particle.innerHTML = ['❤️', '💕', '✨', '💖', '🌟'][Math.floor(Math.random() * 5)];
    particle.style.position = 'absolute';
    particle.style.fontSize = (Math.random() * 25 + 20) + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = '0.6';
    particle.style.animation = `float ${Math.random() * 10 + 12}s ease-in-out infinite`;
    particle.style.pointerEvents = 'none';
    particle.style.filter = 'drop-shadow(0 3px 8px rgba(255, 107, 157, 0.4))';
    
    animatedBg.appendChild(particle);
    
    if (animatedBg.children.length > 30) {
        animatedBg.removeChild(animatedBg.firstChild);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        33% {
            transform: translate(35px, -35px) rotate(120deg);
        }
        66% {
            transform: translate(-35px, 35px) rotate(240deg);
        }
    }
`;
document.head.appendChild(style);

// Create particles
for (let i = 0; i < 20; i++) {
    createParticle();
}
setInterval(createParticle, 3000);

// Heart button click
heartButton.addEventListener('click', function() {
    // Reset if all reasons shown
    if (usedReasons.length === reasons.length) {
        usedReasons = [];
        clickCount = 0;
    }
    
    // Get random reason
    let randomReason;
    do {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        randomReason = reasons[randomIndex];
    } while (usedReasons.includes(randomReason));
    
    usedReasons.push(randomReason);
    clickCount++;
    
    // Animate heart
    this.style.transform = 'scale(1.6)';
    setTimeout(() => {
        this.style.transform = '';
    }, 300);
    
    // Update reason text with animation
    const reasonCard = document.querySelector('.reason-card');
    reasonCard.style.animation = 'none';
    setTimeout(() => {
        reasonText.textContent = randomReason;
        reasonCounter.textContent = `Reason ${clickCount} of ${reasons.length}`;
        reasonCard.style.animation = 'cardAppear 0.6s ease';
    }, 10);
    
    // Create particle burst
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createParticle(), i * 50);
    }
});

// Reveal all reasons
revealBtn.addEventListener('click', function() {
    if (reasonsGrid.style.display === 'none' || reasonsGrid.style.display === '') {
        reasonsGrid.style.display = 'grid';
        this.textContent = 'Hide All Reasons 💝';
        
        // Animate each reason item
        const items = reasonsGrid.querySelectorAll('.reason-item');
        items.forEach((item, index) => {
            item.style.setProperty('--i', index);
            item.style.transform = 'translateY(20px)';
        });
    } else {
        reasonsGrid.style.display = 'none';
        this.textContent = 'Show All Reasons 💝';
    }
});

// Add hover effect to reason items
document.querySelectorAll('.reason-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-8px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});
