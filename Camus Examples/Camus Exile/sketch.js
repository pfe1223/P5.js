var x, y, gap;

function setup() {
  createCanvas(400, 400);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(250, 15, 150);
  noStroke();
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ellipse(i * 50 + 150, j * 50 + 150, 30, 30);
    }
  }

  gap = dist(mouseX, mouseY, 200, 200) - 122;
  fill(83);
  if (gap >= 0) {
    ellipse(mouseX, mouseY, 40, 40);
    x = pmouseX;
    y = pmouseY;
  } else {
    ellipse(x, y, 40, 40);
  }

  stroke(99, 225, 53, map(gap, 0, 80, 255, 0));
  strokeWeight(8);
  noFill();
  ellipse(200, 200, 200, 200);
}
