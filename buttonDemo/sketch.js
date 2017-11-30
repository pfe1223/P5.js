let s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, button;

function preload() {
  s1 = loadSound('Patatap-master/sounds/pinwheel.mp3');
  s2 = loadSound('Patatap-master/sounds/flash-2.mp3');
  s3 = loadSound('Patatap-master/sounds/zig-zag.mp3');
  s4 = loadSound('Patatap-master/sounds/squiggle.mp3');
  s5 = loadSound('Patatap-master/sounds/dotted-spiral.mp3');
  s6 = loadSound('Patatap-master/sounds/glimmer.mp3');
  s7 = loadSound('Patatap-master/sounds/piston-2.mp3');
  s8 = loadSound('Patatap-master/sounds/prism-3.mp3');
  s9 = loadSound('Patatap-master/sounds/suspension.mp3');
  s10 = loadSound('Patatap-master/sounds/moon.mp3');
  console.log("done with sounds");
}

function setup() {
  noCanvas();
  button = createButton("Click Me");
  button.position(100, 100);
  button.mouseClicked(makeSound);
}

function makeSound() {
  let num = floor(random(1, 11));
  console.log(num);
  if (num == 1) {
    s1.play();
  } else if (num == 2) {
    s2.play();
  } else if (num == 3) {
    s3.play();
  } else if (num == 4) {
    s4.play();
  } else if (num == 5) {
    s5.play();
  } else if (num == 6) {
    s6.play();
  } else if (num == 7) {
    s7.play();
  } else if (num == 8) {
    s8.play();
  } else if (num == 9) {
    s9.play();
  } else if (num == 10) {
    s10.play();
  }
}
