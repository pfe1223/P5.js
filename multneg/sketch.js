let cx1 = 150;
let cy1 = 150;

let dx1 = 1.3;
let dy1 = 0.7;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  fill(150, 50, 200);
  ellipse(cx1, cy1, 50, 50);

  cx1 = cx1 + dx1;
  cy1 = cy1 + dy1;

  if (cx1 > width || cx1 < 0) {
    dx1 = dx1 * -1;
  }

  if (cy1 > height || cy1 < 0) {
    dy1 = dy1 * -1;
  }
}
