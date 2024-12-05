let state = {};

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

newGame();

function newGame() {
  state = {
    phase: "aiming",
    currentPlayer: 1,
    bomb: {
      x: undefined,
      y: undefined,
      rotation: 0,
      velocity: { x: 0, y: 0 },
    },
  };

  backgroundBuildings = [];
  buildings = [];
  blastHoles = [];
}
