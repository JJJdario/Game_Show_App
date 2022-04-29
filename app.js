const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const ul = document.querySelector("#phrase ul");
const button = document.querySelector("button");
const imgHarts = document.querySelectorAll("img");
const overlay = document.getElementById("overlay");
const title = document.querySelector(".title");
const btnStartGame = document.querySelector("a");
let reload = document.querySelector(".btn__reset");
let missed = 0;

btnStartGame.addEventListener("click", () => {
  overlay.style.display = "none";
});

const phrases = [
  "Dreams come true",
  "Every moment matters",
  "Bitcoin is the future",
  "Time is money",
  "Now or never ",
];

function getRandomPhraseAsArray(arr) {
  const ramdomNumber = Math.floor(Math.random() * arr.length);
  const ramdomArr = arr[ramdomNumber];
  const split = ramdomArr.split(``);
  return split;
}

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
addPhraseToDisplay(splitedArray);

function checkLetter(btn) {
  let match = null;
  const letter = document.querySelectorAll(".letter");
  for (let i = 0; i < letter.length; i++) {
    if (letter[i].textContent.toLowerCase() === btn.textContent) {
      letter[i].classList.add("show");
      match = btn.textContent;
    }
  }
  return match;
}

qwerty.addEventListener("click", (e) => {
  let target = e.target;
  if (target.tagName === "BUTTON" && target.className !== "chosen") {
    target.className = "chosen";
    let letterFound = checkLetter(target);
    if (letterFound === null) {
      imgHarts[missed].setAttribute("src", "images/lostHeart.png");
      missed++;
    }
  }
  checWin();
});

function reloadGame() {
  reload.addEventListener("click", () => {
    location.reload();
  });
}

function checWin() {
  const liLetter = document.querySelectorAll(".letter");
  const liShow = document.querySelectorAll(".show");

  if (liLetter.length === liShow.length) {
    overlay.style.display = "flex";

    overlay.className = "win";
    title.textContent = "You Won! Well Done.";
    ul.style.display = "none";
    reload.textContent = "Reload";
    reloadGame();
  } else if (missed > 4) {
    overlay.style.display = "flex";
    overlay.className = "lose";
    title.textContent = "Game Over";
    ul.style.display = "none";
    reload.textContent = "Try Again";
    reloadGame();
  }
}
