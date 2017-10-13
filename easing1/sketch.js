var x = 0;
var y = 0;
var easing = 0.1;

function setup() {
  createCanvas(220, 120);
}

function draw() {
  background(120);
  var targetX = mouseX;
  var targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY -y) * easing;
  ellipse(x, y, 12, 12);
}
