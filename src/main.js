//both works
const confetti = require('canvas-confetti');
// import confetti from "canvas-confetti";

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 200,
  spread: 180
  // any other options from the global
  // confetti function
});