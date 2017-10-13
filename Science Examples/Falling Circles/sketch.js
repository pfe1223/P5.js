var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  boundaries.push(new Boundary(290, 80, 100, 9, -0.45)); //1
  boundaries.push(new Boundary(190, 145, 80, 9, 0.65)); //2
  boundaries.push(new Boundary(310, 175, 90, 9, -0.37)); //3
  boundaries.push(new Boundary(200, 255, 90, 9, 0.6)); //4
  boundaries.push(new Boundary(255, 265, 50, 9, -0.58)); //5
  boundaries.push(new Boundary(330, 295, 100, 9, -0.8)); //6
  boundaries.push(new Boundary(231, 350, 90, 9, 0.17)); //7
  boundaries.push(new Boundary(360, 380, 130, 9, -0.1)); //8
  boundaries.push(new Boundary(75, 110, 70, 9, 0.1)); //9
  boundaries.push(new Boundary(100, 215, 70, 9, -0.25)); //10
  boundaries.push(new Boundary(50, 295, 70, 9, 0.7)); //11
  boundaries.push(new Boundary(150, 305, 20, 9, 0.3)); //12
  boundaries.push(new Boundary(125, 375, 70, 9, -0.3)); //13
}

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
  background(61);
  //Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].offScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}
