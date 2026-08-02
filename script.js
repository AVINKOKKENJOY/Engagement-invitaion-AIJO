// Force scroll to top on refresh
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

/**
 * 1. HIGH-DENSITY PETAL GENERATOR
 * Generates 100 petals with varying sizes and speeds
 */
function createPetals() {
    const container = document.getElementById('petal-container');
    const petalCount = 100; // Increased amount for dense coverage

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize size
        const size = Math.random() * 12 + 8 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        
        // Randomize starting position across full width
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Randomize speed (5s to 12s) and massive delays for constant flow
        petal.style.animationDuration = Math.random() * 7 + 5 + 's'; 
        petal.style.animationDelay = Math.random() * 15 + 's';
        
        // Randomize initial rotation
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(petal);
    }
}

// 2. ENTRANCE & MUSIC LOGIC
document.getElementById('startBtn').addEventListener('click', () => {
    // Start at top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Unlock Music
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play unlocked."));
    
    // Hide overlay
    document.getElementById('entrance-overlay').classList.add('hide-overlay');
    
    // Trigger Petals
    createPetals();
    
    // Initialize Scroll Animations
    setTimeout(() => { 
        AOS.init({ duration: 1200, once: true }); 
    }, 500);
});

// 3. COUNTDOWN TIMER
const engagementDate = new Date("August 25, 2024 18:00:00").getTime();
function updateTimer() {
    const now = new Date().getTime();
    const distance = engagementDate - now;

    if (distance < 0) { 
        document.getElementById("timer").innerHTML = "CELEBRATING TODAY!"; 
        return; 
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("mins").innerText = m.toString().padStart(2, '0');
    document.getElementById("secs").innerText = s.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();