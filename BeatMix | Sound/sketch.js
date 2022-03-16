// Week 4: SOUND

// Play with four different beats, either separately or together by clicking on each of the boxes. Click the box again to stop the song.

// Keys:
// a, s, d, f - correspond to different adlibs/vocals.
// j, k, l, ; - correspond to different chords.
// u, i, o, p - these letters are paired with "j,k,l,;" to stop the chords.
// r - press this once to start recording
// t - press to stop recording and save audio (currently causes some errors in the console but it works)

let mic, recorder, soundFile;
let state = 0;
let quad1, quad2, quad3, quad4;
let song1, song2, song3, song4;
let adlib1, adlib2, adlib3, adlib4;
let chord1, chord2, chord3, chord4;
let playToggle,playToggle2,playToggle3,playToggle4 = false
let isPlaying = false


function preload() {
  song1 = loadSound("beats/smode.mp3")
  song2 = loadSound("beats/warmth.mp3")
  song3 = loadSound("beats/dprtrap.mp3")
  song4 = loadSound("beats/limbo.mp3")
  adlib1 = loadSound("sounds/ahh.wav")
  adlib2 = loadSound("sounds/yo-echoing.wav")
  adlib3 = loadSound("sounds/do-you-know.wav")
  adlib4 = loadSound("sounds/youre-safer.wav")
  chord1 = loadSound('sounds/CC_TapePad7-G.wav')
  chord2 = loadSound('sounds/CC_TapePad7-E.wav')
  chord3 = loadSound('sounds/CC_TapePad7-C.wav')
  chord4 = loadSound('sounds/CC_TapePad7-A.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();
}

function draw() {
  background(220);
  quadrants()
  if (mouseX>(windowWidth/2) && mouseY<(windowHeight/2)) {
    cursor('cursors/sun.png')
  }
  if (mouseX<(windowWidth/2) && mouseY<(windowHeight/2)) {
    cursor('cursors/flower.png')
  }
  if (mouseX<(windowWidth/2) && mouseY>(windowHeight/2)) {
    cursor('cursors/bolt.png')
  }
  if (mouseX>(windowWidth/2) && mouseY>(windowHeight/2)) {
    cursor('cursors/butterfly.png')
  }
  if (state == 1){
    fill(255,0,0)
    circle(20,20,15)
  }
}

function mousePressed() {
  if (mouseX>(windowWidth/2) && mouseY<(windowHeight/2)) {
    // cursor(cursor1)
    if (!playToggle && isPlaying != true) {
      song1.play()
    } else {
      song1.pause()
    }
    playToggle = !playToggle
  }
  if (mouseX<(windowWidth/2) && mouseY<(windowHeight/2)) {
    // cursor(cursor2)
    if (!playToggle2 && isPlaying != true) {
      song2.play()
    } else {
      song2.pause()
    }
    playToggle2 = !playToggle2
  }
  if (mouseX<(windowWidth/2) && mouseY>(windowHeight/2)) {
    // cursor(cursor3)
    if (!playToggle3 && isPlaying != true) {
      song3.play()
    } else {
      song3.pause()
    }
    playToggle3 = !playToggle3
  }
  if (mouseX>(windowWidth/2) && mouseY>(windowHeight/2)) {
    // cursor(cursor4)
    if (!playToggle4 && isPlaying != true) {
      song4.play()
    } else {
      song4.pause()
    }
    playToggle4 = !playToggle4
  }
}

function keyTyped() {
  userStartAudio();
  if (key == 'r' && mic.enabled) {
    recorder.record(soundFile);
    state++
  } else if (key == 't') {
    recorder.stop()
    save(soundFile, 'mySound.wav');
    state++
  } else if (key == 'a') {
    adlib1.play()
  } else if (key == 's') {
    adlib2.play()
  } else if (key == 'd') {
    adlib3.play()
  } else if (key == 'f') {
    adlib4.play()
  } else if (key == 'j') {
    chord1.play()
  } else if (key == 'u') {
    chord1.stop()
  } else if (key == 'k') {
    chord2.play()
  } else if (key == 'i') {
    chord2.stop()
  } else if (key == 'l') {
    chord3.play()
  } else if (key == 'o') {
    chord3.stop()
  } else if (key == ';') {
    chord4.play()
  } else if (key == 'p') {
    chord4.stop()
  }
}

function quadrants() {
  noStroke()
  fill(255, 32, 110)
  quad1 = rect(windowWidth/2,0,windowWidth/2,windowHeight/2)
  fill(251, 255, 18)
  quad2 = rect(0,0,windowWidth/2,windowHeight/2)
  fill(65, 234, 212)
  quad3 = rect(0,windowHeight/2,windowWidth/2,windowHeight/2)
  fill(12, 15, 10)
  quad4 = rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2)
} 

