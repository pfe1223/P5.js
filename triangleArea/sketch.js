let t, area;

function setup() {
  createCanvas(400, 400);
  t = new MoveableTriangle();
}

function draw() {
  background(70);
  t.show();
  t.update();

  area = (t.w + t.h) / 2;
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Area: " + area, width / 2, 320);
}
