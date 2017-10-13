var count = 0;

function setup(){
  createCanvas(400, 400);
  strokeWeight(3);
  stroke(255, 255, 255);
}

function draw(){
  background(0);
  translate(width/2, height/2);
  for(var i = 0; i < 35; i++){
    line(-175, -175 + i * 10, 175, -175 + i * 10);
  }

  push();
  rotate(radians(count));
  for(var i = 0; i < 35; i++){
    line(-175, -175 + i * 10, 175, -175 + i * 10);
  }
  pop();

  count = count + 0.1;
}
