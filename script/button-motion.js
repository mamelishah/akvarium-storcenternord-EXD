const btn = document.getElementById('game1');

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let dx = (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 3);
let dy = (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 3);

function move() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x + btnWidth >= screenWidth) {
    dx = -dx * (0.8 + Math.random() * 0.4); 
  }
  if (y <= 0 || y + btnHeight >= screenHeight) {
    dy = -dy * (0.8 + Math.random() * 0.4);
  }

  btn.style.left = x + 'px';
  btn.style.top = y + 'px';

  requestAnimationFrame(move);
}

move();