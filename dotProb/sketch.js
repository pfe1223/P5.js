let pointCount = 0;
let input, points, button;

function setup() {
  createCanvas(400, 400);
  createP('');
  input = createInput("Number of Points");
  button = createButton("Go");
  button.mousePressed(makeDots);
  noFill();
  stroke(150, 50, 150);
  strokeWeight(3);
  noLoop();
}

function draw() {
  background(0);
  ellipse(width / 2, height / 2, width);
}

function makeDots() {
  points = input.value();
  for (let i = 0; i < points; i++) {
    strokeWeight(2);
    stroke(50, 150, 50);
    let x = random(width);
    let y = random(height)
    point(x, y);
    if (dist(x, y, width / 2, height / 2) < width / 2) {
      pointCount++;
    }
  }
  createP("Points inside the circle: " + pointCount);

}