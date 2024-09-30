const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.background = e.target.id;
        break;
      case "red":
        body.style.background = e.target.id;
        break;

      case "pink":
        body.style.background = e.target.id;
        break;

      case "orange":
        body.style.background = e.target.id;
        break;

      case "green":
        body.style.background = e.target.id;
        break;

      case "white":
        body.style.background = e.target.id;
        break;

      case "yellow":
        body.style.background = e.target.id;
        break;

      case "blue":
        body.style.background = e.target.id;
        break;

      default:
        break;
    }
  });
});
