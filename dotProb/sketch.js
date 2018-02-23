let input, button, insideInfo, ratioInfo, totalInfo, slider;

function setup() {
  createCanvas(400, 400);
  background(0);
  createP('');
  // input = createInput('Enter number of points');
  // button = createButton('Go');
  // button.mousePressed(makePoints);
  slider = createSlider(0, 1000, 0);
  slider.input(makePoints);

  insideInfo = createP('Points inside the circle: 0');
  insideInfo.position(415, 0);
  totalInfo = createP('Total points: 0');
  totalInfo.position(415, 20);
  ratioInfo = createP('Ratio of points inside: 0');
  ratioInfo.position(415, 40);

  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width, height);
}

function makePoints() {
  background(0);
  let points = slider.value();
  let insideCircle = 0;
  let ratio = 0;

  for (let i = 0; i < points; i++) {
    stroke(50, 150, 50);
    let x = random(width);
    let y = random(height);
    point(x, y);
    if (dist(x, y, width / 2, height / 2) <= 200) {
      insideCircle++;
    }
  }

  ratio = insideCircle / points * 4;

  insideInfo.html('Points inside the circle: ' + insideCircle);
  totalInfo.html('Total points: ' + points);
  ratioInfo.html('Ratio of points inside: ' + ratio);

  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width, height);
}