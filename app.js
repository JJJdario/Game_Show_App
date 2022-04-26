const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const missed = 0;

//for (let i = 0; i < missed.lenght; i++) {}

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

function getRandomPhraseAsArray(arr) {
  const ramdomNumber = Math.floor(Math.random() * arr.length);
  const ramdomArr = arr[ramdomNumber];
  const split = ramdomArr.split(``);
  return split;
}

const ul = document.querySelector("#phrase ul");

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement(`li`);
    li.textContent = arr[i];
    ul.appendChild(li);

    if (arr[i] !== ` `) {
      li.className = "letter";
    } else {
      li.className = "space";
    }
  }
}
const splitedArray = getRandomPhraseAsArray(phrases);
const array = addPhraseToDisplay(splitedArray);
