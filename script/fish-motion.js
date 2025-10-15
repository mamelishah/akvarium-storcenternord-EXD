const fish = document.querySelector('.fish');

let start = null;
const amplitude = 20;  
const speed = 100;     
const rotationFactor = 0.3; 

function animate(time) {
  if (!start) start = time;
  const t = (time - start) / 1000; 

  const x = t * speed; 

  const centerY = window.innerHeight / 2;
  const y = centerY + Math.sin(t * 3) * amplitude;

  const rotate = Math.sin(t * 3) * rotationFactor * 20; 

    if (x > window.innerWidth + 200) {  
    start = time; 
    return requestAnimationFrame(animate);
  }

  fish.style.left = `${x}px`;
  fish.style.top = `${y}px`;
  fish.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;

  requestAnimationFrame(animate);
}

// Start animationen
requestAnimationFrame(animate);


/*

** INFO **

Formler brugt:

lineær funktion (horisontal uden hældning)
x=v*t

sinus funktionen

y(t)=midten+A*sin(wt)

rotationen bruger vi den samme formel, men hvor vi skalere den ned

rotate = Math.sin(t * 3) * rotationFactor * 20

*/
