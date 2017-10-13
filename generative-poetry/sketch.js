var words1 = ["Something there is that doesn't love a wall,",
              "That sends the frozen-ground-swell under it,",
              "And spills the upper boulders in the sun;",
              "And makes gaps even two can pass abreast. "];
var words2 = ["The work of hunters is another thing:",
              "I have come after them and made repair ",
              "Where they have left not one stone on a stone,",
              "But they would have the rabbit out of hiding,"];
var stanza = "\n";

function setup() {
  createCanvas(400, 400);
  background(51);
  textSize(17);
  textFont("Helvetica");
  //fill(100, 255, 255);
  noLoop();
  shuffle(words1, true);
  shuffle(words2, true);
}

function draw() {
  var location = 10;
  for(i = 0; i < words1.length; i++){
    location += 20;
    fill(200, 200, 200);
    text(words1[i], 10, location);
    fill(255, 255, 255);
    location += 20;
    text(words2[i], 10, location);
    location += 20;
    text(stanza, 10, location);
  }
}
