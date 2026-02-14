// DOM Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subtitle = document.getElementById('subtitle');
const teddyBear = document.getElementById('teddyBear');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const buttonsContainer = document.querySelector('.buttons-container');
let noClickCount = 0;

// Messages to show when hovering/clicking No
const noMessages = [
    "Kundiya pichi Poduva?😤",
    "Olunga yes sollu amni kunchi! 💔",
    "But why? 😢",
    "Nee my manasa odachiya! 💔",
    "Don't be like that! 🥺",
    "Pretty please? 🙏",
    "I'll be so sad... 😭",
    "Kundi yes button ahh thodu! 👉",
    "Don't make the teddy cry! 🧸",
    "The bunnies are sad now... 🐰😢",
    "Just say YES! It's easier! 😊",
    "Come on! You know you want to! 💕",
    "One more chance? 🥹",
    "You're making this harder!🥺",
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

// Create floating hearts only
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 25) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
}

// Start creating hearts
setInterval(createHeart, 300);

// FIXED: Move No button away from cursor - only allow hiding under Yes button after many attempts
function moveNoButton(event) {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();
    
    // Get mouse position relative to container
    let mouseX = event.clientX - containerRect.left;
    let mouseY = event.clientY - containerRect.top;
    
    // Calculate safe zone (area around mouse to avoid)
    const safeZone = 150;
    
    // Calculate Yes button position relative to container
    const yesBtnX = yesBtnRect.left - containerRect.left;
    const yesBtnY = yesBtnRect.top - containerRect.top;
    
    // Generate random position away from mouse
    let newX, newY;
    let attempts = 0;
    const maxAttempts = 20;
    
    // After 10 clicks, allow the button to hide under Yes button
    const allowHideUnderYes = noClickCount >= 10;
    
    do {
        newX = Math.random() * (containerRect.width - noBtnRect.width);
        newY = Math.random() * (containerRect.height - noBtnRect.height);
        
        // Calculate distance from mouse
        const distX = Math.abs(newX + noBtnRect.width / 2 - mouseX);
        const distY = Math.abs(newY + noBtnRect.height / 2 - mouseY);
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Calculate distance from Yes button
        const distFromYesX = Math.abs(newX + noBtnRect.width / 2 - (yesBtnX + yesBtnRect.width / 2));
        const distFromYesY = Math.abs(newY + noBtnRect.height / 2 - (yesBtnY + yesBtnRect.height / 2));
        const distanceFromYes = Math.sqrt(distFromYesX * distFromYesX + distFromYesY * distFromYesY);
        
        attempts++;
        
        // Check if position is far enough from mouse
        const farFromMouse = distance > safeZone;
        
        // Before 10 clicks, also check if far enough from Yes button
        // After 10 clicks, allow it to be close to or under Yes button
        const farFromYes = allowHideUnderYes || distanceFromYes > 100;
        
        // If we found a good position, use it
        if (farFromMouse && farFromYes) {
            break;
        }
        
        // After max attempts, just use what we have (this allows hiding under Yes button)
        if (attempts >= maxAttempts && farFromMouse) {
            break;
        }
    } while (attempts < maxAttempts + 5);
    
    // Apply position instantly (no transition)
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    
    // If after 10 clicks and button ends up near Yes button, hide it under Yes button
    if (allowHideUnderYes) {
        const finalDistFromYesX = Math.abs(newX + noBtnRect.width / 2 - (yesBtnX + yesBtnRect.width / 2));
        const finalDistFromYesY = Math.abs(newY + noBtnRect.height / 2 - (yesBtnY + yesBtnRect.height / 2));
        const finalDistanceFromYes = Math.sqrt(finalDistFromYesX * finalDistFromYesX + finalDistFromYesY * finalDistFromYesY);
        
        if (finalDistanceFromYes < 80) {
            // Position it directly under Yes button
            noBtn.style.left = yesBtnX + 'px';
            noBtn.style.top = yesBtnY + 'px';
            noBtn.style.zIndex = '0';
        }
    }
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

// No button mouse enter event
noBtn.addEventListener('mouseenter', function(e) {
    noClickCount++;
    moveNoButton(e);
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
    noClickCount++;
    moveNoButton(e);
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
    subtitle.style.fontSize = '30px';
    subtitle.style.fontWeight = '700';
    
    // Make teddy super excited
    teddyBear.classList.add('excited');
    teddyBear.style.fontSize = '160px';
    
    // Hide No button
    noBtn.style.display = 'none';
    
    // Make Yes button bigger
    this.style.padding = '35px 80px';
    this.style.fontSize = '40px';
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
        yesBtn.style.boxShadow = '0 12px 50px rgba(255, 107, 157, 0.9)';
        setTimeout(() => {
            yesBtn.style.boxShadow = '0 12px 35px rgba(255, 107, 157, 0.6)';
        }, 300);
    }
}, 2000);