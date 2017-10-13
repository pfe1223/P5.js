var bofs = [];
var mic;
var img;

function preload() {
  img = loadImage("meursault.png");
}

function setup() {
  createCanvas(560, 373);

  mic = new p5.AudioIn();
  mic.start();

  textAlign(CENTER);
  noStroke();
}

function draw() {
  image(img, 0, 0);
  colorMode(RGB);
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  var level = map(mic.getLevel(), 0.0, 0.5, 1, 50);
  //print(bofs.length);

  if (level > 5) {
    var b = new Bof(level);
    bofs.push(b);
  }

  for (var i = 0; i < bofs.length; i++) {
    bofs[i].show();
    bofs[i].update();

    if (bofs[i].y > height) {
      bofs.splice(i, 1);
    }
  }
}

function Bof(l) {
  this.x = random(width);
  this.y = random(height);
  this.hue = random(255);
  this.size = l * 5;
  this.speed = random(1, 6);

  this.show = function() {
    colorMode(HSB);
    fill(this.hue, 255, 255);
    textSize(this.size);
    text("Bof!", this.x, this.y);
  }

  this.update = function() {
    this.y += this.speed;
  }
}
