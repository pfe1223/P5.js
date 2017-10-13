var x1 = 0;
var x2 = 0;
var dx1 = 1;
var dx2 = -1;

function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255);
  strokeWeight(7);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  for(var i = 0; i < 10; i++){
    ellipse(x1, 0, i * 40 + 20, i * 40 + 20);
  }

  for(var i = 0; i < 10; i++){
    ellipse(x2, 0, i * 40 + 40, i * 40 + 40);
  }

  x1 += dx1;
  x2 += dx2;

  if (x1 > 200 || x1 < -200) {
    dx1 *= -1;
  }

  if (x2 > 200 || x2 < -200) {
    dx2 *= -1;
  }
}
