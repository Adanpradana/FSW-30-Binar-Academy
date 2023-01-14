//player pick
const pickScissor = document.getElementById("p-scissor");
const pickPaper = document.getElementById("p-paper");
const pickRock = document.getElementById("p-rock");

//bot result
const botScissor = document.getElementById("botScissor");
const botPaper = document.getElementById("botPaper");
const botRock = document.getElementById("botRock");
const versus = document.getElementById("versus");
const winEl = document.getElementById("winEl");

let isPlay = true;

const options = ["paper", "rock", "scissor"];
const botPick = () => options[~~(Math.random() * options.length)];

function result(playerPick, botPick) {
  if (playerPick === botPick) return `DRAW`;
  if (playerPick === "scissor")
    return botPick === "paper" ? "PLAYER 1 WIN !" : "COM WIN !";
  if (playerPick === "rock")
    return botPick === "scissor" ? "PLAYER 1 WIN !" : "COM WIN";
  if (playerPick === "paper")
    return botPick === "rock" ? "PLAYER 1 WIN !" : "COM WIN";
}

function startGame(pick) {
  if (pick === "scissor") {
    if (!isPlay) return;
    const yourPick = pick;
    const botResult = botPick();
    const winner = result(yourPick, botResult);
    const p = document.createElement("p");
    versus.remove();
    pickScissor.style.backgroundColor = "#C4C4C4";
    winEl.classList.add("active");
    winEl.appendChild(p);
    p.textContent = `${winner}`;
    if (winner === "DRAW") {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#035B0C";
    } else {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#4C9654";
    }
    if (botResult === "scissor") botScissor.style.backgroundColor = "#C4C4C4";
    if (botResult === "paper") botPaper.style.backgroundColor = "#C4C4C4";
    if (botResult === "rock") botRock.style.backgroundColor = "#C4C4C4";
  } else if (pick === "paper") {
    if (!isPlay) return;
    const yourPick = pick;
    const botResult = botPick();
    const winner = result(yourPick, botResult);
    const p = document.createElement("p");
    versus.remove();
    pickPaper.style.backgroundColor = "#C4C4C4";
    winEl.classList.add("active");
    winEl.appendChild(p);
    p.textContent = `${winner}`;
    if (winner === "DRAW") {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#035B0C";
    } else {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#4C9654";
    }
    if (botResult === "scissor") botScissor.style.backgroundColor = "#C4C4C4";
    if (botResult === "paper") botPaper.style.backgroundColor = "#C4C4C4";
    if (botResult === "rock") botRock.style.backgroundColor = "#C4C4C4";
  } else if (pick === "rock") {
    if (!isPlay) return;
    const yourPick = pick;
    const botResult = botPick();
    const winner = result(yourPick, botResult);
    const p = document.createElement("p");
    versus.remove();
    pickRock.style.backgroundColor = "#C4C4C4";
    winEl.classList.add("active");
    winEl.appendChild(p);
    p.textContent = `${winner}`;
    if (winner === "DRAW") {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#035B0C";
    } else {
      winEl.classList.add("active");
      winEl.style.backgroundColor = "#4C9654";
    }
    if (botResult === "scissor") botScissor.style.backgroundColor = "#C4C4C4";
    if (botResult === "paper") botPaper.style.backgroundColor = "#C4C4C4";
    if (botResult === "rock") botRock.style.backgroundColor = "#C4C4C4";
  }
  isPlay = false;
}