let input, button, insideInfo, outsideInfo, ratioInfo;

function setup() {
  createCanvas(400, 400);
  createP('');
  input = createInput("Number of Points");
  button = createButton("Go");
  button.mousePressed(makePoints);

  background(0);
  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width);

  insideInfo = createP("Points inside the circle: 0").position(415, 0);
  outsideInfo = createP("Points outside the circle: 0").position(415, 20);
  ratioInfo = createP("Ratio of points inside to outside: 0").position(415, 40);
}

function makePoints() {
  background(0);

  let points = input.value();
  let insideCircle = 0;
  let outsideCircle = 0;
  let radio = 0;

  for (let i = 0; i < points; i++) {
    strokeWeight(3);
    stroke(50, 150, 50);
    let x = random(width);
    let y = random(height)
    point(x, y);
    if (dist(x, y, width / 2, height / 2) < width / 2) {
      insideCircle++;
    }
  }

  outsideCircle = points - insideCircle;
  ratio = insideCircle / outsideCircle;

  stroke(150, 50, 150);
  strokeWeight(3);
  ellipse(width / 2, height / 2, width);

  insideInfo.html("Points inside the circle: " + insideCircle);
  outsideInfo.html("Points outside the circle: " + outsideCircle);
  ratioInfo.html("Ratio of points inside to outside: " + ratio);
}