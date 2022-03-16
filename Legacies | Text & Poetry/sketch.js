// WEEK 7: TEXT & POETRY
// Stefany Arevalo Escobar
// Completed: March 11, 2022

// Project Name: Legacies
//
// I decided to create an interactive platform to read the poem "Legacies" by Nikki Giovanni. I drew a few sketches to form scenes that correspond with the poem. You get the experience as if reading a poetry childrens book on your screen. Play the sketch, preferably in fullscreen mode for best user experience.

let title,poet,left,right,arrows,canvas;
let song,font1,font2,imgx,imgy,worx,wory;
let s1,s2,s3,s4,s5,s6,s7;
let size;
let playToggle = 0;
let counter = 0;
let verse = [];

function preload() {
  //title & arrows & music
  title = 'Legacies'
  poet = 'by Nikki Giovanni'
  left = loadImage('scenes/left.jpg')
  right = loadImage('scenes/right.jpg')
  song = loadSound('assets/love.mp3')
  font1 = loadFont('assets/cartoon.ttf')
  font2 = loadFont('assets/bubble.ttf')
  //images
  s1 = loadImage('scenes/s1.jpg')
  s2 = loadImage('scenes/s2.jpg')
  s3 = loadImage('scenes/s3.jpg')
  s4 = loadImage('scenes/s4.jpg')
  s5 = loadImage('scenes/s5.jpg')
  s6 = loadImage('scenes/s6.jpg')
  s7 = loadImage('scenes/s7.jpg')
  arrows = loadImage('assets/arrows.png')
  //poem verses
  verse[0] = 'her grandmother called her from the playground'
  verse[1] = '\"yes, ma\'am\"'
  verse[2] = '\"i want chu to learn how to make rolls\" said the old woman proudly'
  verse[3] = 'but the little girl didn\'t want to learn how because she knew'
  verse[4] = 'even if she couldn\'t say it that'
  verse[5] = 'that would mean when the old one died she would be'
  verse[6] = 'less dependent on her spirit so she said'
  verse[7] = '\"i don’t want to know how to make no rolls\" with her lips poked out'
  verse[8] = 'and the old woman wiped her hands on her apron saying'
  verse[9] = '\"lord these children\"'
  verse[10] = '...and neither of them ever said what they meant'
  verse[11] = 'and i guess nobody ever does...'
}

function setup() {
  //canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(canvasPressed);
  size = (windowWidth/(windowWidth*1.5));
  imageMode(CENTER)
  //font setup
  textFont(font1)
  textAlign(CENTER)
  textSize(40*size)
  //misc variables
  imgx = windowWidth/2;
  imgy = windowHeight/3;
  worx = windowWidth/2;
  wory = (windowHeight*3)/4;
}

function draw() {
  background(255);
  size = (windowWidth/(windowWidth*1.2));
  //click to start
  if (playToggle == 0) {
    introScreen()
  }
  //instructions
  if (playToggle > 0 && counter == 0) {
    push()
      text("use the left and right keys to move forward or backwards in the poem",worx,imgy)
      arrows.resize(300*size,0)
      image(arrows,imgx,wory-150)
      text("press right key to begin reading the poem",worx,wory)
    pop()
  }
  //scene switch
  switch (counter) {
    case 1:
      screen1()
      break;
    case 2:
      screen2()
      break;
    case 3:
      screen3()
      break;
    case 4:
      screen4()
      break;
    case 5:
      screen5()
      break;
    case 6:
      screen6()
      break;
    case 7:
      screen7()
      break;
    case 8:
      endScene()
      break;
  }
}

function introScreen() {
  push()
    textSize(200*size)
    textFont(font2)
    text(title,windowWidth/2,windowHeight/3)
  pop()
  
  push()
    textSize(100*size)
    text(poet,windowWidth/2,windowHeight/2)
  pop()
  
  push()
    rectMode(CENTER)
    strokeWeight(5)
    textSize(70*size)
    rect(windowWidth/2,(windowHeight*3)/4,windowWidth/3.5,windowWidth/10,40*size)
    text('click to start',windowWidth/2,((windowHeight*3)/4)+20)
  pop()
}

function screen1() {
  s1.resize(600*size,0)
  image(s1,imgx,imgy)
  text(verse[0],worx,wory)
}

function screen2() {
  s2.resize(600*size,0)
  image(s2,imgx,imgy)
  text(verse[1],worx,wory-25)
  text(verse[2],worx,wory+25)
}

function screen3() {
  s3.resize(600*size,0)
  image(s3,imgx,imgy)
  text(verse[3],worx,wory-25)
  text(verse[4],worx,wory+25)
}

function screen4() {
  s4.resize(600*size,0)
  image(s4,imgx,imgy+50)
  text(verse[5],worx,wory-25)
  text(verse[6],worx,wory+25)
}

function screen5() {
  s5.resize(600*size,0)
  image(s5,imgx,imgy)
  text(verse[7],worx,wory)
}

function screen6() {
  s6.resize(600*size,0)
  image(s6,imgx,imgy) 
  text(verse[8],worx,wory-25)
  text(verse[9],worx,wory+25)
}

function screen7() {
  text(verse[10],worx,imgy-100)
  text(verse[11],worx,wory+100)
  s7.resize(600*size,0)
  image(s7,imgx,wory-150)
}

function endScene() {
  push()
    text('Illustrations and interactive adaptions by Stefany Arevalo Escobar',worx,imgy)
    textSize(20*(windowWidth/(windowWidth*1.2)))
    text('Nikki Giovanni, \"Legacies\" from My House. Copyright © 1972 by NikkiGiovanni.',worx,wory)
    text('Source: https://www.poetryfoundation.org/poems/48227/legacies',worx,wory+50)
    text('BGM: Love by Cosmic Boy ft. Fisherman',worx,wory+100)
  pop()
}

function keyPressed() {
  if ((keyCode == RIGHT_ARROW) && (counter < 8)) {
    counter++
  } 
  if ((keyCode == LEFT_ARROW) && (counter > 0)) {
    counter--
  }
}

function canvasPressed() {
  playToggle++
  if (playToggle == 1) {
    song.loop(0,1,0.1)
  } 
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowHeight);
}