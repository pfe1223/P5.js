let input, button;

function setup() {
  createCanvas(400, 400);
  createP('');
  input = createInput("Nombre de points");
  button = createButton("Aller");
  button.mousePressed(makePoints);
  noLoop();
}

function draw() {
  background(0);

  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width);
}

function makePoints() {
  let points = input.value();
  let insideCircle = 0;
  let outsideCircle = 0;
  var radio = 0;

  for (let i = 0; i < points; i++) {
    strokeWeight(2);
    stroke(50, 150, 50);
    let x = random(width);
    let y = random(height)
    point(x, y);
    if (dist(x, y, width / 2, height / 2) < width / 2) {
      insideCircle++;
    }
  }

  outsideCircle = points - insideCircle;
  ratio = insideCircle / outsideCircle

  stroke(150, 50, 150);
  strokeWeight(3);
  ellipse(width / 2, height / 2, width);

  createP("Les points à l'intérieur: " + insideCircle).position(410, 0);
  createP("Les points à l'extérieur: " + outsideCircle).position(410, 20);
  createP("Le ratio: " + ratio).position(410, 40);
}