
const kirurgfiskInfo = {
  paletKirurg: {
    navn: "Palet kirurg",
    farve: "Blå og gul",
    sjovFakta: "Denne fisk kender du måske som Dory! Den gemmer sig i koraller, når den bliver bange.",
    billede: "./images/fishes/dory.png"
  },
  gulKirurg: {
    navn: "Gul kirurg",
    farve: "Knaldgul",
    sjovFakta: "Den ligner en lille sol under vandet. Den elsker at spise alger hele dagen lang.",
    billede: "./images/fishes/gul-kirurgfisk.png"

  },
  hvidstrubetKirurg: {
    navn: "Hvidstrubet kirurg",
    farve: "Blå med gul rygfinne",
    sjovFakta: "Den har et hvidt 'halsbånd' under hovedet. Den kan godt lide at bestemme over de andre fisk.",
    billede: "./images/fishes/blaa-fisk.png"

  },
  sejlfinnetKirurg: {
    navn: "Sejlfinnet kirurg",
    farve: "Stribet (brun og hvid)",
    sjovFakta: "Kan slå sine finner ud, så den ligner et stort sejl på et skib. Det gør den for at se stor og farlig ud.",
    billede: "./images/fishes/dory"

  },
sortbaandetKirurg: {
    navn: "Sortbåndet kirurg",
    farve: "Hvid med sorte striber",
    sjovFakta: "Ligner en lille fange med sine striber. Den svømmer tit rundt i store flokke med sine venner.",
    billede: "./images/fishes/sortbandetkirug.png"
  },
  sahalKirurg: {
    navn: "Sahal kirurg",
    farve: "Gråblå med striber",
    sjovFakta: "Har flotte, vandrette striber og er kendt for at være 'kongen' af sit koralrev.",
        billede: "./images/fishes/dory"

  },
  gulfinnetKirurg: {
    navn: "Gulfinnet kirurg",
    farve: "Grå med gule finner",
    sjovFakta: "Dette er en af de største kirurgfisk. Man kan altid kende den på de flotte, gule finner.",
        billede: "./images/fishes/hvid-fisk.png"

  },
klovnfisk: {
    navn: "Klovnfisk",
    farve: "Orange med hvide striber",
    sjovFakta: "Klovnfisken bor i bløde søanemoner, som egentligt er en giftig plante, men fiskens hud har et særligt lag slim, som gør at giften ikke er farlig for klovnfisken.",
    billede: "./images/fishes/Nemo.png"
  },

roedehavsKirurg: {
    navn: "Røgfarvet kirurg",
    farve: "Lilla og gul",
    sjovFakta: "Har en superflot lilla farve og en knaldgul hale. Den bor, som navnet siger, i Rødehavet.",
        billede: "./images/fishes/orange-fisk.png"

  },
  orangeplettetKirurg: {
    navn: "Orangeplettet kirurg",
    farve: "Grøn/gul med orange plet",
    sjovFakta: "Når den er ung, er den helt gul! Som voksen får den en smart orange plet bag øjet.",
        billede: "./images/fishes/gron-fisk.png"

  },
  brunKirurg: {
    navn: "Brun kirurg",
    farve: "Brun",
    sjovFakta: "Selvom den ser lidt almindelig ud, har den fine små prikker på hovedet og elsker at spise sammen med hundredvis af venner.",
        billede: "./images/fishes/dory"

  },
  zebrastribetKirurg: {
    navn: "Zebrastribet kirurg",
    farve: "Stribet (blå og gul)",
    sjovFakta: "En af de mest farvestrålende fisk med striber, der ligner en pyjamas. Den er meget aktiv.",
    billede: "./images/fishes/blaa-stribet-fisk.png"

  }
};


// --- POP-UP LOGIK ---

const infoButton = document.getElementById('info-button');
const infoPopup = document.getElementById('info-popup');
const closeButton = document.querySelector('.close-button');
const fishGrid = document.getElementById('fish-grid');
const fishDetails = document.getElementById('fish-details');

function openPopup() {
    infoPopup.classList.add('show');
    document.getElementById('button-click').play();
}

function closePopup() {
    infoPopup.classList.remove('show');
    document.getElementById('button-click').play();

}

function populateFishGrid() {
    fishGrid.innerHTML = '';
    
    for (const fishKey in kirurgfiskInfo) {
        const fish = kirurgfiskInfo[fishKey];
        
        const img = document.createElement('img');
        img.src = `${fish.billede}`; 
        img.alt = fish.navn;
        img.classList.add('fish-icon');
        img.dataset.fishKey = fishKey;
        
        fishGrid.appendChild(img);
    }
}

function showFishInfo(fishKey) {
    const fish = kirurgfiskInfo[fishKey];
    
    fishDetails.innerHTML = `
        <h3>${fish.navn}</h3>
        <p><strong>Farver:</strong> ${fish.farve}</p>
        <p><strong>Sjov fakta:</strong> ${fish.sjovFakta}</p>
    `;


    document.querySelectorAll('.fish-icon').forEach(icon => icon.classList.remove('active'));
    document.querySelector(`.fish-icon[data-fish-key="${fishKey}"]`).classList.add('active');
}



infoButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

infoPopup.addEventListener('click', (event) => {
    if (event.target === infoPopup) {
        closePopup();
    }
});

fishGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('fish-icon')) {
        const fishKey = event.target.dataset.fishKey;
        showFishInfo(fishKey);
    }
});



populateFishGrid();