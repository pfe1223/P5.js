let button, w, h;
let wRuler, hRuler;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  button = createButton("generate");
  button.mousePressed(generateRectangle);
  w = floor(random(20, 300));
  h = floor(random(20, 300));
  background(70);

  wRuler = new wLine();
  hRuler = new hLine();
}

function draw() {
  background(70);
  stroke(255);
  strokeWeight(3);
  fill(255, 50);
  rect(width / 2, height / 2, w, h);

  wRuler.show();
  wRuler.update();

  hRuler.show();
  hRuler.update();

  if (wRuler.length == w) {
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(w, 380, 380);
  }

  if (hRuler.length == h) {
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(h, 20, 20);
  }
}

//user writes this function
function generateRectangle() {
  background(70);
  w = floor(random(20, 300));
  h = floor(random(20, 300));
}
