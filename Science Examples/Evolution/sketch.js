var blobs, food;

function setup() {
  createCanvas(600, 400);
  blobs = makeBlobs(20);
  food = makeFood(10);
}

function draw() {
  background(44, 62, 80);

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].run();

    if (blobs[i].reproduce()) {
      blobs.push(new Blob(blobs[i].position, blobs[i].dna));
    }

    for (var j = 0; j < food.length; j++) {
      if (blobs[i].eat(j)) {
        food.splice(j, 1);
        blobs[i].energy();
      }
    }

    if (blobs[i].dead()) {
      blobs.splice(i, 1);
    }
  }

  displayFood(food);
  gameOver();
}
