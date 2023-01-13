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
    const yourPick = pick;
    const botResult = botPick();
    const winner = result(yourPick, botResult);
    console.log(`${yourPick} vs ${botResult}`);
    console.log(winner);
    versus.remove();
    pickScissor.style.backgroundColor = "#C4C4C4";
    winEl.classList.add("active");
    winEl.textContent = `${winner}`;
    winner === "DRAW"
      ? (winEl.style.backgroundColor = "#035B0C")
      : (winEl.style.backgroundColor = "#4C9654");

    
  } else if (pick === "paper") {
    const yourPick = pick;
    const botInit = botPick();
    const winner = result(yourPick, botInit);
    console.log(`${yourPick} vs ${botInit}`);
    console.log(winner);
  } else if (pick === "rock") {
    const yourPick = pick;
    const botInit = botPick();
    const winner = result(yourPick, botInit);
    console.log(`${yourPick} vs ${botInit}`);
    console.log(winner);
  }
}
