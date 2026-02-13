// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('openBtn');
    const surpriseSection = document.getElementById('surpriseSection');
    const daysCounter = document.getElementById('daysCounter');
    const reasonBtn = document.getElementById('reasonBtn');
    const reasonText = document.getElementById('reasonText');
    
    // Reasons why I love you
    const reasons = [
        "Your smile brightens my darkest days",
        "You make me laugh like no one else can",
        "Your kindness touches everyone around you",
        "You believe in me even when I don't believe in myself",
        "Your hugs are my favorite place in the world",
        "You make ordinary moments extraordinary",
        "Your voice is the sweetest sound I know",
        "You understand me without words",
        "Your patience amazes me every day",
        "You inspire me to be a better person",
        "Your love makes me feel complete",
        "You're my best friend and my soulmate",
        "Your strength gives me courage",
        "You make every day an adventure",
        "Your beauty takes my breath away",
        "You're the first thing I think of every morning",
        "Your dreams become my dreams too",
        "You make me feel like the luckiest person alive",
        "Your laughter is contagious and pure joy",
        "You're everything I've ever wished for"
    ];
    
    let usedReasons = [];
    
    // Open envelope animation
    openBtn.addEventListener('click', function() {
        envelope.classList.add('open');
        openBtn.classList.add('hidden');
        
        // Show surprise section after envelope opens
        setTimeout(() => {
            surpriseSection.classList.add('visible');
            startHeartAnimation();
        }, 1500);
    });
    
    // Calculate days since you met (Change this date to your actual meeting date!)
    // Format: new Date('YYYY-MM-DD')
    const meetingDate = new Date('2024-02-14'); // Change this to your actual date!
    
    function calculateDays() {
        const today = new Date();
        const diffTime = Math.abs(today - meetingDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    
    // Animate counter
    function animateCounter() {
        const targetDays = calculateDays();
        let currentDays = 0;
        const increment = Math.ceil(targetDays / 50);
        
        const counterInterval = setInterval(() => {
            currentDays += increment;
            if (currentDays >= targetDays) {
                currentDays = targetDays;
                clearInterval(counterInterval);
            }
            daysCounter.textContent = currentDays;
        }, 30);
    }
    
    // Show random reason
    reasonBtn.addEventListener('click', function() {
        // Reset if all reasons have been used
        if (usedReasons.length === reasons.length) {
            usedReasons = [];
        }
        
        // Get a random reason that hasn't been used
        let randomReason;
        do {
            const randomIndex = Math.floor(Math.random() * reasons.length);
            randomReason = reasons[randomIndex];
        } while (usedReasons.includes(randomReason));
        
        usedReasons.push(randomReason);
        
        // Animate the reason text
        reasonText.style.animation = 'none';
        setTimeout(() => {
            reasonText.textContent = randomReason;
            reasonText.style.animation = 'fadeIn 0.6s ease';
        }, 10);
    });
    
    // Create floating hearts animation
    function startHeartAnimation() {
        animateCounter();
        setInterval(createHeart, 800);
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.opacity = '0.7';
        heart.style.zIndex = '1';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float ${Math.random() * 5 + 12}s linear`;
        heart.style.filter = 'drop-shadow(0 0 8px rgba(255, 107, 157, 0.5))';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 17000);
    }
    
    // Add some initial sparkle to the open button
    function addSparkle() {
        if (!openBtn.classList.contains('hidden')) {
            const sparkle = document.createElement('span');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '22px';
            sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = '50%';
            
            openBtn.style.position = 'relative';
            openBtn.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                transform: translate(0, 0) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 40 - 20}px, -50px) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add sparkles periodically to the button
    setInterval(addSparkle, 2000);
    
    // Make photo placeholders clickable (you can customize this)
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.15) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
    
    // Add a special message on hover
    const letterElement = document.querySelector('.letter');
    letterElement.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 50px rgba(255, 107, 157, 0.5)';
    });
    
    letterElement.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
});
