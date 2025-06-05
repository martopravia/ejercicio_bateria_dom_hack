const allButtons = document.querySelectorAll(".button");

for (const button of allButtons) {
  button.addEventListener("click", function () {
    const letter = this.value;
    playSound(letter);
  });
}

document.addEventListener("keydown", function (e) {
  const keyDown = e.key;
  playSound(keyDown);
});

function playSound(letter) {
  const exactLetters = ["w", "a", "s", "d", "j", "k", "l"];
  if (exactLetters.includes(letter)) {
    const music = new Audio(`../sounds/${letter}.mp3`);

    music.play();
  }
}
