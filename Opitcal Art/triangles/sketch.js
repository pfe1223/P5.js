var n = 0;

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(5);
  stroke(255);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  push();
  rotate(radians(n));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  push();
  rotate(radians(-n));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  push();
  rotate(radians(n + 45));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  push();
  rotate(radians(-n + 45));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  push();
  rotate(radians(n + 90));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  push();
  rotate(radians(-n + 90));
  triangle(0, -120, -120, 120, 120, 120);
  triangle(-120, -120, 0, 120, 120, -120);
  pop();

  n = n + 0.1;

}
