// const clock = document.querySelector("#clock");
const clock = document.getElementById("clock");

setInterval(function () {
  let time = new Date();
  //   clock.appendChild(time);
  clock.innerText = time.toLocaleTimeString();
}, 1000);
