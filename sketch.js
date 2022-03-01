/*
 * @name Continuous Lines
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
