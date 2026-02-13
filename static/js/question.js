// DOM Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subtitle = document.getElementById('subtitle');
const teddyBear = document.getElementById('teddyBear');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
let noClickCount = 0;
let isMoving = false;

// Messages to show when hovering/clicking No
const noMessages = [
    "Are you sure? 🥺",
    "Please reconsider! 💔",
    "But why? 😢",
    "You're breaking my heart! 💔",
    "Don't be like that! 🥺",
    "Pretty please? 🙏",
    "I'll be so sad... 😭",
    "The Yes button is right there! 👉",
    "Don't make the teddy cry! 🧸",
    "The bunnies are sad now... 🐰😢",
    "Just say YES! It's easier! 😊",
    "Come on! You know you want to! 💕",
    "One more chance? 🥹",
    "You're making this harder! 😤",
    "I won't give up! 💪💕"
];

// Content to show on No button
const noButtonTexts = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Please no!",
    "Don't click!",
    "Why not?",
    "Say YES!",
    "Come on!",
    "Just YES!",
    "Please YES! 🥺"
];

// Create floating hearts
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
}

// Create floating emojis (teddy bears and bunnies)
function createFloatingEmoji() {
    const emojisContainer = document.querySelector('.emojis-container');
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    emoji.innerHTML = ['🧸', '🐰', '💐', '🌹', '🎀'][Math.floor(Math.random() * 5)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.top = Math.random() * 100 + '%';
    emoji.style.animationDelay = Math.random() * 5 + 's';
    emojisContainer.appendChild(emoji);
    
    // Limit number of floating emojis
    if (emojisContainer.children.length > 15) {
        emojisContainer.removeChild(emojisContainer.firstChild);
    }
}

// Start creating hearts and emojis
setInterval(createHeart, 300);
setInterval(createFloatingEmoji, 2000);

// Initial emojis
for (let i = 0; i < 10; i++) {
    createFloatingEmoji();
}

// Move No button to random position with smooth animation
function moveNoButton() {
    if (isMoving) return;
    isMoving = true;
    
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate safe boundaries
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    // Get current position
    const currentLeft = parseFloat(noBtn.style.left) || containerRect.width / 2 - btnRect.width / 2;
    const currentTop = parseFloat(noBtn.style.top) || 0;
    
    // Generate new position (away from current position)
    let newLeft, newTop;
    do {
        newLeft = Math.random() * maxX;
        newTop = Math.random() * maxY;
    } while (
        Math.abs(newLeft - currentLeft) < 100 || 
        Math.abs(newTop - currentTop) < 50
    );
    
    // Apply smooth transition
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
    
    setTimeout(() => {
        isMoving = false;
    }, 200);
}

// Update No button text
function updateNoButtonText() {
    const textIndex = Math.min(noClickCount, noButtonTexts.length - 1);
    noBtn.textContent = noButtonTexts[textIndex];
}

// Show modal
function showModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Create confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.background = ['#ff6b9d', '#667eea', '#764ba2', '#f093fb'][Math.floor(Math.random() * 4)];
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// No button hover event
noBtn.addEventListener('mouseenter', function() {
    moveNoButton();
    noClickCount++;
    updateNoButtonText();
    
    // Update subtitle with funny message
    const messageIndex = Math.min(noClickCount - 1, noMessages.length - 1);
    subtitle.textContent = noMessages[messageIndex];
    subtitle.classList.add('begging');
    setTimeout(() => subtitle.classList.remove('begging'), 500);
    
    // Shrink No button
    this.classList.add('shrink');
    
    // Grow Yes button
    yesBtn.classList.add('grow');
    setTimeout(() => {
        yesBtn.classList.remove('grow');
        this.classList.remove('shrink');
    }, 300);
    
    // Make teddy excited
    teddyBear.classList.add('excited');
    setTimeout(() => teddyBear.classList.remove('excited'), 1000);
    
    // Create more hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createHeart(), i * 50);
    }
});

// No button click event (for mobile and when they actually click)
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show modal
    showModal();
    
    // Shake button
    this.classList.add('shake');
    setTimeout(() => this.classList.remove('shake'), 400);
    
    // Move button
    moveNoButton();
    noClickCount++;
    updateNoButtonText();
    
    // Update subtitle
    const messageIndex = Math.min(noClickCount - 1, noMessages.length - 1);
    subtitle.textContent = noMessages[messageIndex];
    subtitle.classList.add('begging');
    setTimeout(() => subtitle.classList.remove('begging'), 500);
    
    // Additional effects
    yesBtn.classList.add('grow');
    this.classList.add('shrink');
    teddyBear.classList.add('excited');
    
    setTimeout(() => {
        yesBtn.classList.remove('grow');
        this.classList.remove('shrink');
        teddyBear.classList.remove('excited');
    }, 300);
});

// Modal close button
modalCloseBtn.addEventListener('click', function() {
    closeModal();
    
    // Focus on Yes button
    yesBtn.style.transform = 'scale(1.2)';
    yesBtn.style.animation = 'yesPulse 0.5s ease-in-out infinite';
    
    setTimeout(() => {
        yesBtn.style.transform = '';
    }, 500);
});

// Close modal when clicking outside
modalOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Yes button click event
yesBtn.addEventListener('click', function() {
    // Create confetti explosion
    createConfetti();
    
    // Change subtitle
    subtitle.textContent = "Yay! I knew you'd say yes! 🎉💕";
    subtitle.style.color = '#ff6b9d';
    subtitle.style.fontSize = '28px';
    subtitle.style.fontWeight = '700';
    
    // Make teddy super excited
    teddyBear.classList.add('excited');
    teddyBear.style.fontSize = '150px';
    
    // Hide No button
    noBtn.style.display = 'none';
    
    // Make Yes button bigger
    this.style.padding = '30px 70px';
    this.style.fontSize = '36px';
    this.textContent = '💕 YES! 💕';
    
    // Create heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createHeart(), i * 50);
    }
    
    // Redirect to celebration page after 2 seconds
    setTimeout(() => {
        window.location.href = '/celebration';
    }, 2000);
});

// Create confetti
function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#6c5b7b', '#355c7d', '#f8b195'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Teddy click animation
teddyBear.addEventListener('click', function() {
    this.style.transform = 'scale(1.5) rotate(360deg)';
    setTimeout(() => {
        this.style.transform = '';
    }, 500);
    
    // Create hearts around teddy
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
});

// Add sparkle to Yes button periodically
setInterval(() => {
    if (yesBtn.style.display !== 'none') {
        yesBtn.style.boxShadow = '0 10px 40px rgba(255, 107, 157, 0.9)';
        setTimeout(() => {
            yesBtn.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.5)';
        }, 300);
    }
}, 2000);