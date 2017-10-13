var objects = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  objects[0] = new Object(200, 200);
  objects[1] = new Object(200, 150);
  objects[2] = new Object(200, 250);
  objects[3] = new Object(150, 200);
  objects[4] = new Object(250, 200);
  objects[5] = new Object(150, 150);
  objects[6] = new Object(150, 250);
  objects[7] = new Object(250, 150);
  objects[8] = new Object(250, 250);
}

function draw() {
  background(220);
  fill(83);
  ellipse(mouseX, mouseY, 40, 40);

  for (var i = 0; i < objects.length; i++) {
    objects[i].show();
    objects[i].update();
  }
}
