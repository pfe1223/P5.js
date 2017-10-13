let s1, s2, s3;
let w, h, d;
let area = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  createP('Width');
  s1 = createSlider(0, 200, 100);
  createP('Height');
  s2 = createSlider(0, 200, 100);
  createP('Depth');
  s3 = createSlider(0, 200, 100);
  //textAlign(CENTER, CENTER);
}

function draw() {
  background(70);
  w = s1.value();
  h = s2.value();
  d = s3.value();
  rotateY((mouseX - width / 2) * 0.005);
  rotateX((mouseY - width / 2) * 0.005);
  box(w, h, d);
  a = w * h * d;
  //text(str(a), width / 2, 100);
}
