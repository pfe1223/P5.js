var n = 0;

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(5);
  stroke(255);
}

function draw() {
  background(0);
  for(var i = 0; i < 40; i++) {
    if(i % 2 == 0){
      bezier(10, i * 9 + 10,
        137, i * 9 + 10 + sin(n) * 200,
        264, i * 9 + 10+ cos(n) * 200,
        390, i * 9 + 10);
    } else {
      bezier(10, i * 9 + 10,
        137, i * 9 + 10 + cos(n) * 200,
        264, i * 9 + 10 + sin(n) * 200,
        390, i * 9 + 10);
      }
  }
  n = n + 0.05;
}
