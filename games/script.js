//player pick
const pickScissor = document.getElementById("p-scissor");
const pickPaper = document.getElementById("p-paper");
const pickRock = document.getElementById("p-rock");

//bot result
const botScissor = document.getElementById("botScissor");
const botPaper = document.getElementById("botPaper");
const botRock = document.getElementById("botRock");
const versus = document.getElementById("versus");

const options = ["paper", "rock", "scissor"];

const botPick = () => options[~~(Math.random() * options.length)];

function changeEl() {
  versus.remove();
}
changeEl();

function result(playerPick, botPick) {
  if (playerPick === botPick) return `DRAW`;
  if (playerPick === "scissor")
    return botPick === "paper" ? "you won" : "you lose";
  if (playerPick === "rock")
    return botPick === "scissor" ? "you won" : "you lose";
  if (playerPick === "paper")
    return botPick === "rock" ? "you won" : "you lose";
}

function startGame(pick) {
  if (pick === "scissor") {
    const yourPick = pick;
    const botInit = botPick();
    const winner = result(yourPick, botInit);
    console.log(`${yourPick} vs ${botInit}`);
    console.log(winner);
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
