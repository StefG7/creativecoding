let song1, song2, song3, song4, song5
let playToggle = false
let counter = 0
let limit = 35
let size, angle, color, cnv;

function preload(){
  song1 = loadSound('./arrival.mp3')
  song2 = loadSound('./2.mp3')
  song3 = loadSound('./4.mp3')
  song4 = loadSound('./6.mp3')
  song5 = loadSound('./8.mp3')
  song6 = loadSound('./10.mp3')
  song7 = loadSound('./12.mp3')
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // saveCanvas(cnv, 'REMIX', 'jpg');
  
  cnv.mousePressed(canvasPressed);
  frameRate(30)
  
  amp = new p5.Amplitude()
    
  song1.setVolume(0.4)
  song2.setVolume(0.7)
  song3.setVolume(0.7)
  song4.setVolume(0.7)
  song5.setVolume(0.5)
  song6.setVolume(0.5)
  song7.setVolume(0.5)
}

function draw() {
  if (keyIsPressed === true) {
    background(0)
  } else {
    background(255)
  }
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.7, 100, 500);
  angle = map(vol, 0, 0.7, 0, 180)
  size = map(vol, 0, 0.7, 200, 700)
  
  if (vol > 0) {
    // console.log(song1.rate())
    switch(song1.rate()){
      case 0.75: 
        limit = 50
        break;
      case 1:
        limit = 35
        break;
      case 1.25:
        limit = 20
        break;
      case 1.5:
        limit = 10
        break;
    }
    if (counter > limit) {
      noStroke()
      color = fill(random(255), random(255), random(255))
      counter = 0
    } 
    if (diam > 150) {
      createFractal(size,angle)
    }
    ellipse(width/2, height/2, diam, diam);
    // sphere(diam)
    counter++
  }
  console.log(limit)
}

function createFractal(size, angle) {
  if (size > 3) {
    stroke(random(255), random(255), random(255));
    strokeWeight(map(size, 0, 180, 0, 10, true));
    //Up Right
    push();
    rotate(radians(angle));
    line(0, 0, size, 0);
    translate(size, windowWidth);
    createFractal(size / 2, angle);
    pop();
    //Down Right
    push();
    rotate(radians(-angle));
    line(0, 0, size, 0);
    translate(size, windowHeight);
    createFractal(size / 2, angle);
    pop();
    //Up Left
    push();
    rotate(radians(angle * -3));
    line(0, 0, size, 0);
    translate(size, 0);
    createFractal(size / 2, angle);
    pop();
    //Down Left
    push();
    rotate(radians(angle * 3));
    line(0, 0, size, 0);
    translate(size, 0);
    createFractal(size / 2, angle);
    pop();
  }
}

function canvasPressed() {
  if(!playToggle){
    song1.loop()
  }
  else{
    song1.stop()
  }
  playToggle = !playToggle
  
}

function keyPressed(e) {
  let soundLength = song1.duration()
  // console.log(e.key)
  if (e.key === 'Enter') {
    saveCanvas(cnv, 'REMIX', 'png');
  }
  
  switch(e.key){
    case 'a':
      song2.loop()
      break;
    case 's':
      song3.loop()
      break;
    case 'd':
      song4.loop()
      break;
    case 'j':
      song5.loop()
      break;
    case 'k':
      song6.loop()
      break;
    case 'l':
      song7.loop()
      break;
      
    case '1':
      song1.jump(0)
      break;
    case '2':
      song1.jump(soundLength/4,soundLength - soundLength/4)
      break;
    case '3':
      song1.jump(soundLength/4*2,soundLength - soundLength/4*2)
      break;
    case '4':
      song1.jump(soundLength/4*3,soundLength - soundLength/4*3)
      break;
            
    case '7':
      song1.rate(0.75)
      break;
    case '8':
      song1.rate(1)
      break;
    case '9':
      song1.rate(1.25)
      break;
    case '0':
      song1.rate(1.5)
      break;
  }
}

function keyReleased(e) {
  switch(e.key){
    case 'a':
      song2.stop()
      break;
    case 's':
      song3.stop()
      break;
    case 'd':
      song4.stop()
      break;
    case 'j':
      song5.stop()
    case 'k':
      song6.stop()
      break;
    case 'l':
      song7.stop()
      break;
  }
}


// SCRATCH CODE

// let waves = []
  
// if(song1.isPlaying()) {
//   waves = song1.getPeaks()
// }

//   this.x = random(0,width);
//   this.y = random(0,height);
//   this.r = random(1,8);
//   this.xSpeed = random(-2,2);
//   this.ySpeed = random(-1,1.5)

// function createParticle() {
//     noStroke();
//     fill('rgba(200,169,169,0.5)');
//     circle(this.x,this.y,this.r);
//   }


  