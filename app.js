const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");

const missed = 0;
for (let i = 0; i < missed.lenght; i++) {}

const overlay = document.getElementById("overlay");
const btnStartGame = document.querySelector("a");
btnStartGame.addEventListener("click", () => {
  overlay.style.display = "none";
});

const phrases = [
  "Your best teacher is your last mistake",
  "Every moment matters",
  "Never regret anything that made you smile",
  "Hope is the last thing ever lost",
  "Shopping is cheaper than therapy",
];
const phrasesLenght = phrases.length;

function getRandomPhraseAsArray(arr) {
  const ramdomArr = Math.floor(Math.random() * arr);
  return ramdomArr;
}
const ramdomPhrase = phrases[getRandomPhraseAsArray(phrasesLenght)];
let split = ramdomPhrase.length;
console.log(split);
