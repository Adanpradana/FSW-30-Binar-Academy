const target = (props) => {
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
  }
};
