
document.addEventListener("DOMContentLoaded", () => {
  const game1 = document.getElementById("game1");
  const clickSound = document.getElementById("button-click");

  game1.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play()
      .then(() => {
        clickSound.addEventListener('ended', () => {
          window.location.href = "vende-spil.html";
        }, { once: true });
      })
      .catch(err => {
        window.location.href = "vende-spil.html";
      });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const game1 = document.getElementById("back-button");
  const clickSound = document.getElementById("button-click");

  game1.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play()
      .then(() => {
        clickSound.addEventListener('ended', () => {
          window.location.href = "index.html";
        }, { once: true });
      });
  });
});




