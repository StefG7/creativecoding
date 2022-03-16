// CMPM 169 | 3D & WEBGL Assignment
// Stefany Arevalo Escobar
// Project Name: Find the Flower Boy

// This landscape is inspired by the "Flower Boy" album cover by Tyler the Creator. Hidden in the sunflowers are three Tylers, and it is your job to find them!

// Instructions: You can look around the scene by clicking and dragging your mouse on the canvas. Scrolling allows you to zoom in and out.

// Press the 's' key to save an image of the screen.

let hill,field,grass,sun1,sun2,bee,cloud,white,tyler1,tyler2,tyler3;
let canvas,bg,song,x,y,font,start,instructions,instructions2;
let playToggle = 0;

function preload() {
  // load models
  hill = loadModel("assets/Mountain.obj",true);
  // load images/textures
  field = loadImage("assets/green2.jpg");
  sun1 = loadImage("assets/sunflowers.png");
  sun2 = loadImage("assets/sunflowers-2.png");
  bee = loadImage("assets/Bee-PNG.png"); 
  tyler1 = loadImage("assets/tyler1.png");
  tyler2 = loadImage("assets/tyler2.png");
  tyler3 = loadImage("assets/tyler3.png");
  cloud = loadImage("assets/clouds.jpeg");
  white = loadImage("assets/blue.jpeg");
  // load other
  song = loadSound("assets/seeyouagain-synth.mp3")
  font = loadFont("assets/KEEP.TTF")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.mousePressed(canvasPressed);
  noStroke();
  fill('#ffd60a')
  textFont(font)
  textSize(200)
  start = 'Click on the screen to start!'
  instructions = ''
  instructions2 = ''
  frameRate(30);
  y = -900;
  x = 1000;
}

function draw() {
  bg = background(242, 100, 25,0)
  orbitControl(2, 2, 0.5);
  
  pointLight(255, 255, 255, -900, -800, 200)
  pointLight(255, 255, 255, 900, -400, 700)
  // pointLight(252, 204, 93, -900, -400, 200)
  // pointLight(252, 204, 93, 900, -400, 700)
  
  push()
    translate(0,0,-300)
    text('Flower Boy', -windowWidth/3,-windowHeight/3)
    fill('#c9184a')
    translate(0,0,30)
    text('Flower Boy', -windowWidth/3,(-windowHeight/3)-10)
  pop()
  
  // Start 
  push()
    textSize(50)
    translate(0,-50,0)
    text(start,-windowWidth/3,0)
    textSize(30)
    fill('#c9184a')
    translate(200,0,0)
    text(instructions,-windowWidth/3,80)
    text(instructions2,-windowWidth/3,100)
  pop()
  
  // Landscape
  translate(0,300,-300)
  createLandscape()
  
  // Clouds
  push()
    createCloud()
    translate(1600,-100,100)
    createCloud()
  pop()
  
  // Bees
  scale(0.5)
  image(bee,x,(y-200))
  image(bee,x*2,(y-300)*2)
  rotateY(PI)
  image(bee,x,(y-800))
  
  // Jiggling randomly on the horizontal axis
  y = y + random(-5, 5);
  // Moving up at a constant speed
  x = x - 10;
  // Reset to the bottom
  if (x < -1000) {
  x = 1000;
  }

}

function createCloud() {
  push()
    texture(white)
    translate(-800,-800,200)
    sphere(50)
    translate(-40,0,40)
    sphere(50)
    translate(80,0,-80)
    sphere(50)
    translate(0,0,70)
    sphere(50)
    translate(-40,-40,-40)
    sphere(50)
    translate(-40,40,-40)
    sphere(50)
  pop()
}

function createLandscape() {
  // tyler
  push()
    scale(0.4)
    translate(0,0,-500)
    image(tyler1,100,200)
  pop()
  
  push()
    scale(0.5)
    translate(0,0,-700)
    image(tyler2,1900,-300)
  pop()
  
  push()
    scale(0.3)
    translate(0,0,-400)
    image(tyler3,-4200,400)
  pop()
  
  // flowers
  push()
    rotateY(2*PI)
    rotateZ(-PI/30)
    scale(0.45)
    translate(-3300,0,-500)
    image(sun1,-300,-800)
  pop()
  
  push()
    rotateY(PI)
    scale(0.5)
    translate(-400,0,400)
    image(sun1,-800,-600)
  pop() 
  
  push()
    rotateY(2*PI)
    rotateZ(PI/40)
    scale(0.45)
    translate(600,0,-550)
    image(sun1,800,-600)
  pop()  
  
  push()
    rotateY(PI)
    scale(0.6)
    translate(0,0,200)
    image(sun2,-550,-150)
    translate(0,0,50)
    image(sun2,1500,-100)
    rotateY(PI)
    image(sun2,1400,-50)
  pop()
  
  // hills
  push()
    translate(600, 200, 250)
    rotateZ(PI)
    rotateY(PI/2)
    scale(10)
    texture(field)
    model(hill)
  pop()
  
  push()
    translate(-600, 200, 250)
    rotateZ(PI)
    rotateY(PI/2)
    scale(10)
    texture(field)
    model(hill)
  pop()
  
}

function keyTyped() {
  if (key === 's') {
    saveCanvas(canvas, 'flowerboy', 'jpg');
  }
}

function canvasPressed() {
  playToggle++
  if (playToggle == 1) {
    song.loop(0,1,0.1,1,73)
    start = 'Find Tyler the Creator...there are 3...4?'
    instructions = 'Look around the scene by clicking and dragging your mouse.'
    instructions2 = 'Scrolling allows you to zoom in and out.'
  }
}