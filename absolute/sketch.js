var slider;
var num;

function setup() {
  createCanvas(400, 400);
  createP('');
  slider = createSlider(-100, 100, 0);
}

function draw() {
  background(0);
  num = slider.value();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Number: " + num, 200, 175);
  text("Absolute value: " + absolute(num), 200, 250);

}

function absolute(num) {
  if (num > 0) {
    return num;
  } else {
    return num * -1;
  }
}
