const elementTarget = document.querySelector("nav .wrapper .navigation .menu");
const button = document.querySelector("nav wrapper hamburger-menu");

function target(props) {
  if (props === "main") {
    location.href = "#hero";
  } else if (props === "games") {
    location.href = "#game-features";
  } else if (props === "sysReq") {
    location.href = "#sys-req";
  } else if (props === "quotes") {
    location.href === "#top-scores";
  } else if (props === "about") {
    location.href = "#newsletter";
  } else if (props === "rockPaperScissor") {
    location.href = "/games";
  }
}

// const hamburger = () => {
//   elementTarget.classList.toggle("nav wrapper navigation menu hidden");
//   console.log(elementTarget);
// };
