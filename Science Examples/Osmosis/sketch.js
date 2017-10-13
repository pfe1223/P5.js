var m, left, right;

function setup() {
  createCanvas(600, 400);
  m = [];
  for (var i = 0; i < 16; i++) {
    m.push(new Molecule());
  }
  left = 0;
  right = 0;
}

function draw() {
  background(95);

  strokeWeight(5);
  stroke(0);
  line(width / 2, 0, width / 2, height);

  showMolecules();
  countMolecules();
  showCount();

  if (left > right) {
    moveRight((left - right) / 2);
  } else {
    moveLeft((right - left) / 2);
  }
}

function showMolecules() {
  for (var i = 0; i < m.length; i++) {
    m[i].update();
  }
}

function countMolecules() {
  left = 0;
  right = 0;
  for (var i = 0; i < m.length; i++) {
    if (m[i].left) {
      left++;
    } else {
      right++;
    }
  }
}

function showCount() {
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(30);
  fill(255);
  text(left, 150, 385);
  text(right, 450, 385);
}

function moveRight(num) {
  var index = 0;
  for (var i = 0; i < m.length; i++) {
    if (index < num && m[i].left) {
      m[i].stay = false;
      index++;
    }
  }
}

function moveLeft(num) {
  var index = 0;
  for (var i = 0; i < m.length; i++) {
    if (index < num && !m[i].left) {
      m[i].stay = false;
      index++;
    }
  }
}
