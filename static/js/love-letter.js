// DOM Elements
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const heartsBackground = document.querySelector('.hearts-background');

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 4 + 10) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    heartsBackground.appendChild(heart);
    
    setTimeout(() => heart.remove(), 14000);
}

// Create hearts continuously
setInterval(createFloatingHeart, 500);

// Initial hearts
for (let i = 0; i < 20; i++) {
    createFloatingHeart();
}

// Open envelope
openBtn.addEventListener('click', function() {
    envelope.classList.add('open');
    this.classList.add('hidden');
    
    // Create heart burst
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createFloatingHeart(), i * 50);
    }
});

// Auto-scroll letter when opened
envelope.addEventListener('transitionend', function() {
    if (this.classList.contains('open')) {
        const letter = document.querySelector('.letter');
        letter.style.overflowY = 'auto';
    }
});
