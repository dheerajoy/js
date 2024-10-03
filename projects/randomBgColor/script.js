const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const colorName = document.getElementById("colorName");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    code += hex[randomIndex];
  }
  return code;
};

let interval;

const startNow = function changeColor() {
  if (!interval) {
    interval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
      colorName.innerText = randomColor();
    }, 1000);
  }
};

const stopNow = function stopColorChange() {
  clearInterval(interval);
  interval = null;
};

startButton.addEventListener("click", startNow);
stopButton.addEventListener("click", stopNow);
