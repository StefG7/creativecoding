// ML Assignment
// Stefany Arevalo Escobar

// Use your hand to hold a mic, ready to sing. Try to trigger the singing by moving your hand to a specific spot on the canvas!

let handpose;
let video;
let hands = [];
let mic,sing,song;

function preload() {
  mic = loadImage('pics/mic.png')
  sing = loadImage('pics/music.png')
  // song = loadSound('pics/film.mp3')
}

function setup() {
  // createCanvas(windowWidth, windowHeight)
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("hand", results => {
    hands = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < hands.length; i += 1) {
    const hand = hands[i];
    // console.log(hand)
    // hands[3].landmarks[0][0]
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      if (j == 10) {
        push()
          imageMode(CENTER)
          image(mic,keypoint[0]-10, keypoint[1]-10)
        pop()
      } else {
        ellipse(keypoint[0], keypoint[1], 10, 10);
      }
      if ((keypoint[0] > 320) && (keypoint[1] > 240)) {
        image(sing,320,20)
        // song.play()
      }
      // } else {
      //   song.pause()
      // }
    }
  }
}
