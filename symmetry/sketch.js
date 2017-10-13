var s = new Symmetry();

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(55);

  s.start = 0;
  s.stop = PI;
  s.dx = 0.15;
  s.resolution = 150;
  s.show();
}

function drawAgain() {
  redraw();
}
