
  const board = document.getElementById('game-board');

    const fishes = [
      { name: 'Dory', image: 'images/fishes/dory.png' },
      { name: 'Sort båndet kirug', image: 'images/fishes/sortbandetkirug.png' },
      { name: 'Nemo', image: 'images/fishes/Nemo.png' },
      { name: 'Grøn fisk', image: 'images/fishes/gron-fisk.png' },
      { name: 'Hvid fisk', image: 'images/fishes/hvid-fisk.png' },
      { name: 'Orange fisk', image: 'images/fishes/orange-fisk.png' },
      { name: 'Blå fisk', image: 'images/fishes/blaa-fisk.png' },
      { name: 'Blå stribet fisk', image: 'images/fishes/blaa-stribet-fisk.png' }
    ];

    let gameCards = [...fishes, ...fishes].sort(() => Math.random() - 0.5);

    gameCards.forEach(fish => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.name = fish.name;
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-back">
            <img src="images/card-img/card-back.png" alt="bagside">
          </div>
          <div class="card-front">
            <img src="${fish.image}" alt="${fish.name}">
            <p>${fish.name}</p>
          </div>
        </div>
      `;
      board.appendChild(card);
    });

    let flippedCards = [];
    let lockBoard = false;

board.addEventListener('click', e => {
  const drawingSound = document.getElementById("drawing-card-sound");
  const matchSound = document.getElementById("match-sound");
  const noMatchSound = document.getElementById("no-match-sound");

  const card = e.target.closest('.card');
  if (!card || lockBoard || flippedCards.includes(card)) return;

  drawingSound.currentTime = 0;

  drawingSound.play();

  card.classList.add('flip');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    lockBoard = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.name === card2.dataset.name) {
      console.log('Match fundet!');
      matchSound.currentTime = 0;
      matchSound.play().catch(err => console.error('match sound fejl:', err));
      flippedCards = [];
      lockBoard = false;
    } else {
      noMatchSound.currentTime = 0;
      noMatchSound.play().catch(err => console.warn('no-match sound fejl:', err));
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        flippedCards = [];
        lockBoard = false;
      }, 600);
    }
  }
});
