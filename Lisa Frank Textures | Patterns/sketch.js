// Stefany Arevalo Escobar | Assignment 4
// 
// PATTERNS AND TRANSFORMATIONS | "Lisa Frank Textures"
//
// [INSTRUCTIONS]
//    
// This pattern generator has 4 shapes options, and you can change their positioning to create a variety of patterns. 

// CLICK ON CANVAS FIRST TO ENABLE KEY OPTIONS.
// Using the up and down keys allows you to iterate through the different shapes. The left and right keys form different patterns based on a rotation, and the different patterns are labeled in the top left.
//
// KEYS
//
// L/R Arrows    : Used to iterate through all the possible pattern rotations.
// Up/Down Arrows: Used to iterate through the 4 possible shapes.
// r             : Resets canvas to first pattern and shape.
// s             : You can save the image as a png by typing s.

let shape = 0;
let angle = 1;
let count = 1;

let neon;
let fly;
function preload() {
  neon = loadFont('text/neon2.ttf');
  fly = loadImage('pics/butterfly.png');
  shapes = loadImage('pics/shapes.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(3);
}

function draw() {
  background(0)
  // Prints out what pattern number the user is currently on
  patternNum(angle)
  // Runs the code that generates the pattern
  pattern(shape);
}

function pattern(shape) {
  for (let i = -10; i < windowWidth+ 30; i += 30){
    for (let j = -10; j < windowHeight+ 30; j += 30){ 
      // Set a color range that randomizes at each iteration
      let c = color(random(20,220),random(75,230),random(115,180),200);
      fill(c);
      noStroke();
      console.log(shape)
      rotate(PI/angle);
      if (shape == 0) {
        frameRate(3)
        square(i, j, 40,10,20,30,40);
      } else if (shape == 1) {
        frameRate(3)
        star(i, j, 15, 30, 5);
      } else if(shape == 2) {
        frameRate(1)
        shapes.resize(60,60)
        tint(c)
        image(shapes, i, j);
      } else {
        frameRate(1)
        fly.resize(40,40)
        tint(c)
        image(fly, i, j);
      }
    }
  }
}


function star(x, y, radius1, radius2, npoints) {
  let angle2 = TWO_PI / npoints;
  let halfAngle = angle2 / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle2) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function patternNum(angle) {
  textFont(neon);
  textSize(100);
  text(str(count), 50, 100)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && angle > 2) {
    angle -= 2;
    count -= 1;
  } else if (keyCode === RIGHT_ARROW) {
    angle += 2;
    count += 1;
  } else if (keyCode === UP_ARROW && shape < 3) {
    shape += 1;
  } else if (keyCode === DOWN_ARROW && shape > 0) {
    shape -= 1;
  }
}

function keyTyped() {
  if (key === 's') {
    saveCanvas(canvas, 'pattern', 'png');
  } else if (key === 'r') {
    shape = 0;
    angle = 1;
    count = 1;
  }
  
}