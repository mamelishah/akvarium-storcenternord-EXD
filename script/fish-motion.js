const fishes = document.getElementsByClassName("fish");

// Ruter for fiskene
const fishRoutes = [
  { startX: 100, startY: 200, direction: 1, speed: 60 },      
  { startX: window.innerWidth - 100, startY: 300, direction: -1, speed: 70 },
  { startX: 150, startY: 400, direction: 1, speed: 80 },      
  { startX: window.innerWidth - 200, startY: 350, direction: -1, speed: 55 }, 
  { startX: 300, startY: 250, direction: 1, speed: 75 }     
];

// Opret data for hver fisk baseret på ruterne
const fishData = Array.from(fishes).map((fish, i) => {
  const route = fishRoutes[i]
  return {
    start: Math.random() * 1000,
    amplitude: 10 + Math.random() * 30,
    speed: route.speed,
    rotationFactor: 0.2 + Math.random() * 0.3,
    direction: route.direction,
    offsetY: route.startY,
    x: route.startX,
    baseY: route.startY  
  };
});


// Animationsfunktionen
function animate(time) {
  Array.from(fishes).forEach((fish, i) => {
    const data = fishData[i];
    const t = (time - data.start) / 1000;

    const waveY = Math.sin(t * 3) * data.amplitude;
    
    const y = data.baseY + waveY;

    data.x += data.speed * 0.016 * data.direction;

    if (data.direction === 1 && data.x > window.innerWidth + fish.offsetWidth) {
      data.x = -fish.offsetWidth;
    } else if (data.direction === -1 && data.x < -fish.offsetWidth) {
      data.x = window.innerWidth + fish.offsetWidth;
    }

    const rotateAmplitude = data.rotationFactor * 20;
    const rotate = Math.sin(t * 3) * rotateAmplitude;


    fish.style.left = `${data.x}px`;
    fish.style.top = `${y}px`;
  });

  requestAnimationFrame(animate);
}


// Start animationen
requestAnimationFrame(animate);