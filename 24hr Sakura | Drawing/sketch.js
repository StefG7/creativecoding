let a = 0;
let b = 0;
let c = 0;
let pen = 1;

let img;
function preload() {
  img = loadImage('moon.png');
}

function setup() {
  createCanvas(800, 500);
  background("#bde0fe");
  noStroke();
  fill("#ffd60a");
  circle(700, 50, 60);
}

function draw() {
  //Sakura flowers
  if (pen == 1) {
    if (mouseIsPressed === true) {
      a += 5;
      let val = cos(radians(a)) * 12.0;
      for (let i = 0; i < 360; i += 75) {
        let xoff = cos(radians(i)) * val;
        let yoff = sin(radians(i)) * val;
        // stroke("#90a955");
        // strokeWeight(3);
        // line(mouseX, mouseY, pmouseX, pmouseY);1
        fill("#ffcad4");
        strokeWeight(1);
        stroke("#f4acb7");
        ellipse(mouseX + xoff, mouseY + yoff, val, val);
      }
      fill("#f4acb7");
      ellipse(mouseX, mouseY, 2, 2);
    }
  }
  //Grass
  if (pen == 2) {
    if (mouseIsPressed === true) {
      b = random(700, 900);
      c = random(5, 7);
      stroke("#90a955");
      fill("#90a955");
      ellipse(mouseX, b, c, 500);
    }
  }
  //Clouds
  if (pen == 3) {
    if (mouseIsPressed === true) {
      fill(255);
      stroke(255);
      circle(mouseX, mouseY + 5, 50);
      circle(mouseX, mouseY - 15, 30);
      circle(mouseX + 20, mouseY, 40);
      circle(mouseX - 20, mouseY, 40);
      circle(mouseX + 35, mouseY + 10, 30);
      circle(mouseX - 35, mouseY + 10, 30);
    }
  }
}

//flags set to change the pen(writing utensil) being used or to set the screen to night/day.
function keyTyped() {
  if (key == "1") {
    pen = 1;
  }
  if (key == "2") {
    pen = 2;
  }
  if (key == "3") {
    pen = 3;
  }
  if (key == "n") {
    background("#284b63");
    //image(img, 650, 20, 100,100); realistic moon ver.
    noStroke();
    fill("#fee440");
    circle(60, 60, 60);
    fill("#284b63");
    circle(70, 50, 50);

    for (let j = 0; j < 20; j++) {
      a = random(1, 10);
      x1 = random(5, 755);
      y1 = random(5, 455);
      stroke("#fff3b0");
      strokeWeight(a);
      point(x1, y1);
    }
  }
  if (key == "d") {
    background("#bde0fe");
    noStroke();
    fill("#ffd60a");
    circle(700, 50, 60);
  }
}

/*strokeWeight(a)
  if(mouseIsPressed === true) {
      
      line(mouseX,mouseY,pmouseX,pmouseY)
  }*/
//mouseIsPressed && line(mouseX,mouseY,pmouseX,pmouseY)
// mouseX/Y is the current mouse location and with p is the previous
//console.log('mouseX, mouseY: ', mouseX, mouseY)
