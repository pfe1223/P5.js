function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  //background(0);
  drawLine(200, 200, -2, 0, 100);
}

function drawLine(startx, starty, m, b, length) {
  for (let x = 0; x < length; x++) {
    let y = m * x + b;
    ellipse(x + startx, y + starty, 10, 10);
  }
}
