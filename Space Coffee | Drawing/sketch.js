function setup() {
  createCanvas(800, 800);
  frameRate(1)
}

function draw() {
  background("#00111c");

  // Headphones
  let m1 = { x: 720, y: 90 };
  let m2 = { x: 760, y: 200 };
  let m3 = { x: 710, y: 310 };
  let m4 = { x: 850, y: 650 };
  noFill();
  strokeWeight(5);
  stroke("#fcb46c");
  curve(m1.x, m1.y, m1.x, m1.y, m2.x, m2.y, m3.x, m3.y);
  stroke("#fcb46c");
  curve(m1.x, m1.y, m2.x, m2.y, m3.x, m3.y, m4.x, m4.y);
  stroke("#fcb46c");
  curve(m2.x, m2.y, m3.x, m3.y, m4.x, m4.y, m4.x, m4.y);
  strokeWeight(0);
  fill("#ffcb65");
  circle(700, 100, 50);

  let n1 = { x: 760, y: 60 };
  let n2 = { x: 770, y: 150 };
  let n3 = { x: 710, y: 310 };
  let n4 = { x: 850, y: 650 };
  noFill();
  strokeWeight(5);
  stroke("#fcb46c");
  curve(n1.x, n1.y, n1.x, n1.y, n2.x, n2.y, n3.x, n3.y);
  stroke("#fcb46c");
  curve(n1.x, n1.y, n2.x, n2.y, n3.x, n3.y, n4.x, n4.y);
  stroke("#fcb46c");
  curve(n2.x, n2.y, n3.x, n3.y, n4.x, n4.y, n4.x, n4.y);
  strokeWeight(0);
  fill("#ffcb65");
  circle(770, 60, 50);

  fill(50);
  ellipse(687, 100, 18, 31);
  ellipse(757, 60, 18, 31);
  circle(706, 100, 9);
  circle(776, 60, 9);

  // Music
  fill("#CC99FF");
  ellipse(660, 50, 21, 10);
  ellipse(630, 45, 21, 10);
  ellipse(626, 100, 21, 10);
  stroke("#CC99FF");
  strokeWeight(3);
  line(635, 100, 639, 128);
  line(639, 44, 642, 20);
  line(669, 51, 672, 25);
  quad(642, 20, 672, 25, 674, 15, 644, 10);

  // Stars
  for (let j = 0; j < 20; j++) {
    a = random(1, 10);
    x1 = random(5, 755);
    y1 = random(5, 755);
    stroke("#b3deff"); 
    strokeWeight(a); 
    point(x1, y1);
  }
  
  //Moon
  strokeWeight(0)
  fill("#f9f9f9")
  circle(800, 1000, 700)
  fill("#bccac9")
  circle(750, 800, 120)
  circle(640, 750, 40)
  fill("#9caaa9")
  circle(790, 730, 70)

  // Color Gauge
  fill("#7161ef");
  strokeWeight(0);
  square(50, 700, 65, 10);
  fill("#957fef");
  square(50, 650, 65, 10);
  fill("#b79ced");
  square(50, 600, 65, 10);
  fill("#dec0f1");
  square(50, 550, 65, 10);

  // Text
  strokeWeight(0);
  fill("#054a91");
  circle(288, 645, 255);

  textSize(80);
  stroke("#CC99FF");
  strokeWeight(2);
  fill(0, 204, 204, 98);
  text("coffee", 180, 615);
  fill(0, 204, 204, 95);
  text("café", 210, 680);
  fill(0, 204, 204, 50);
  text("커피", 210, 755);

  textSize(80);
  strokeWeight(2);
  fill(0, 204, 204, 98);
  text("coffee", 180, 610);
  fill(0, 102, 204, 95);
  text("café", 210, 675);
  fill(0, 102, 204, 50);
  text("커피", 210, 750);

  // Coffee
  for (let i = 0; i < 10; i++) {
    r = random(50, 200);
    x = random(50, 500);
    y = random(50, 400);
    fill("#814F16");
    stroke("#814F16");
    circle(x, y, r);
  }

  // Cup
  fill("#643047");
  stroke("#643047");
  strokeWeight(4);
  quad(350, 450, 550, 300, 750, 550, 550, 700);

  // Handle
  let p1 = { x: 600, y: 360 };
  let p2 = { x: 640, y: 270 };
  let p3 = { x: 720, y: 430 };
  let p4 = { x: 680, y: 460 };
  noFill();
  stroke("#643047");
  strokeWeight(20);
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  stroke("#053c5e");
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  stroke("#643047");
  curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas(canvas, 'space-coffee', 'png');
  } else if (key === 'r') {
    shape = 0;
    angle = 1;
    count = 1;
  } 
}
