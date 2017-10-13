var n = 0;

function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255);
  strokeWeight(5);
}

function draw() {
  background(0);

  for(var i = 0; i < 8; i++){ //i are the columns
    for(var j = 0; j < 8; j++){ //j are the rows
      if(i % 2 == 0){
        line(i * 50 + 25, j * 50 + 25, -sin(n) * 25 + i * 50 + 25, -cos(n) * 25 + j * 50 + 25);
      } else {
        line(i * 50 + 25, j * 50 + 25, sin(n) * 25 + i * 50 + 25, cos(n) * 25 + j * 50 + 25);
      }
    }
  }

  n = n + 0.01;
}
