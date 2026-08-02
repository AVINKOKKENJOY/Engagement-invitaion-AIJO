// Force scroll to top on every load/refresh
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

document.getElementById('startBtn').addEventListener('click', () => {
    // Scroll to absolute top before revealing
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play unlocked."));
    
    document.getElementById('entrance-overlay').classList.add('hide-overlay');
    
    setTimeout(() => { 
        AOS.init({ duration: 1200, once: true }); 
    }, 500);
});

// Countdown logic
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