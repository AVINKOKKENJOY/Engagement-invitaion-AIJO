// Force scroll to top on refresh
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

// 1. PETAL GENERATOR
function createPetals() {
    const container = document.getElementById('petal-container');
    for (let i = 0; i < 100; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 12 + 8 + 'px';
        petal.style.width = size; petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 7 + 5 + 's'; 
        petal.style.animationDelay = Math.random() * 15 + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(petal);
    }
}

// 2. ENTRANCE & INITIALIZATION
document.getElementById('startBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music unlocked."));
    document.getElementById('entrance-overlay').classList.add('hide-overlay');
    createPetals();
    setTimeout(() => { AOS.init({ duration: 1200, once: true }); }, 500);
});

// 3. COUNTDOWN TIMER
const engagementDate = new Date("August 25, 2024 18:00:00").getTime();
function updateTimer() {
    const now = new Date().getTime();
    const distance = engagementDate - now;
    if (distance < 0) { document.getElementById("timer").innerHTML = "CELEBRATING TODAY!"; return; }
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