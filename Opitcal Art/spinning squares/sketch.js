var n = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
  stroke(255);
  rectMode(CENTER);
  noFill();
}

function draw() {
  background(0);
  translate(width/2, height/2);

  for(var i = 1; i < 19; i++){
    rotate(n);
    rect(0, 0, i * 20 + 10, i * 20 + 10);
  }

  n = n + 0.001;
}
