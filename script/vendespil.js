const board = document.getElementById('game-board');

console.log("hello")

const cards = [
  'images/apple.png',
  'images/banana.png',
  'images/cherry.png',
  'images/grape.png'
];

let gameCards = [...cards, ...cards]
  .sort(() => Math.random() - 0.5);

gameCards.forEach((imageSrc) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="images/card-back.png" alt="bagside" class="back">
    <img src="${imageSrc}" alt="forside" class="front">
  `;
  board.appendChild(card);
});

let flippedCards = [];

board.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card || card.classList.contains('flip')) return;

  card.classList.add('flip');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.front').src;
    const img2 = card2.querySelector('.front').src;

    if (img1 === img2) {
      flippedCards = [];
    } else {
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        flippedCards = [];
      }, 1000);
    }
  }
});
