var ball, wind, gravity;

function setup() {
  createCanvas(600, 300);
  ball = new Mover(random(0.1, 5), 0, 0);
  wind = createVector(0.01, 0);
  gravity = createVector(0, ball.mass * 0.1);
}

function draw() {
  background(220);

  ball.applyForce(wind);
  ball.applyForce(gravity);

  ball.update();
  ball.checkEdge();
  ball.show();

}
