var world;
var data;
var firstMsg;
var secondMsg;
var thirdMsg;

function preload() {
  world = loadImage('worldMap.jpg');
  data = loadJSON('countries.json');
}

function setup() {
  createCanvas(1100, 550);
  firstMsg = "Since 1980, ";
  secondMsg = " has executed ";
  thirdMsg = " people.";
  textSize(20);
  textAlign(CENTER);
}

function draw() {
  image(world, 0, 0);
  for (var i = 0; i < data.countries.length; i++) {
    noStroke();
    fill(250, 50, 150);
    ellipse(data.countries[i].x, data.countries[i].y, 20, 20);
    if (dist(mouseX, mouseY, data.countries[i].x, data.countries[i].y) < 15) {
      fill(0);
      noStroke();
      text(firstMsg + data.countries[i].name + secondMsg + data.countries[i].executions + thirdMsg, mouseX, mouseY - 5);
    }
  }
}
