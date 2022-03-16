let webCam;
let value = 0;

function setup() {
  createCanvas(windowWidth, 510);
  pixelDensity(1);
  webCam = createCapture(VIDEO);
  webCam.size(width, height);
  webCam.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(mouseX/4);
  webCam.loadPixels();
  stepSize = 4
  for (let y = 0; y < height; y+=stepSize) {
    for (let x = 0; x < width; x+=stepSize) {
      const i = (y * width + x) * 4; 
      fill(webCam.pixels[i], mouseX/4,  mouseX/4, webCam.pixels[i+3], webCam.pixels[i+4])
      if (value === 0){
        circle(x,y,webCam.pixels[i+4]%(mouseY/2))
      }
      else {
        ellipse(x,y,webCam.pixels[i+4]%(mouseX/4),webCam.pixels[i+4]%(mouseY/2))
      }
      
    }
  }
}

function mouseClicked() {
  if (value === 0) {
    value = 1;
  } else {
    value = 0;
  }
}
 
     