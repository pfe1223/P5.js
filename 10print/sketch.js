let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
}

function draw() {
  if (random(1) < 0.5) {
    curve1();
  } else {
    curve2();
  }

  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y > height) {
    noLoop();
  }
}

function line1() {
  line(x, y + spacing, x + spacing, y);
}

function line2() {
  line(x + spacing, y + spacing, x, y);
}

function circleF() {
  fill(255);
  ellipse(x + spacing / 2, y + spacing / 2, spacing, spacing);
}

function circleE() {
  noFill();
  ellipse(x + spacing / 2, y + spacing / 2, spacing, spacing);
}

function line3() {
  for (let i = 0; i < spacing; i += 2) {
    line(x + i, y, x + i, y + spacing)
  }
}

function line4() {
  for (let i = 0; i < spacing; i += 2) {
    line(x, y + i, x + spacing, y + i)
  }
}

function dots1() {
  for (let i = 0; i < spacing; i += spacing / 4) {
    fill(255);
    ellipse(x + i, y + spacing / 2, spacing / 4, spacing / 4);
  }
}

function dots2() {
  for (let i = 0; i < spacing; i += spacing / 4) {
    fill(255);
    ellipse(x + spacing / 2, y + i, spacing / 4, spacing / 4);
  }
}

function curve1() {
  noFill();
  bezier(x, y + spacing, x, y, x + spacing, y + spacing, x + spacing, y);
}

function curve2() {
  noFill();
  bezier(x, y, x + spacing, y, x, y + spacing, x + spacing, y + spacing);
}
