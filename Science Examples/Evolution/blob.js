function Blob(loc, dna) {
  this.position = loc.copy();
  this.health = 200;
  this.xoff = random(1000);
  this.yoff = random(1000);
  this.vx = 0;
  this.vy = 0;
  this.dna = dna;
  this.r = map(this.dna, 0, 1, 0, 50);
  this.maxspeed = map(this.r, 0, 50, 10, 0);

  this.run = function() {
    this.update();
    this.borders();
    this.display();
  }

  this.reproduce = function() {
    // asexual reproduction
    if (random(1) < 0.0005) {
      return true;
    } else {
      return false;
    }
  }

  this.eat = function(num) {
    //console.log(food.length);
    if (dist(this.position.x, this.position.y, food[num].position.x, food[num].position.y) < this.r / 2 + 5) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    // Simple movement based on perlin noise
    this.vx = map(noise(this.xoff), 0, 1, -this.maxspeed, this.maxspeed);
    this.vy = map(noise(this.yoff), 0, 1, -this.maxspeed, this.maxspeed);
    var velocity = createVector(this.vx, this.vy);
    this.xoff += 0.01;
    this.yoff += 0.01;

    this.position.add(velocity);
    // Death always looming
    this.health -= 0.2;
  }

  // Teleport to other side of canvas
  this.borders = function() {
    if (this.position.x + this.r / 2 < 0) this.position.x = width + this.r / 2;
    if (this.position.y + this.r / 2 < 0) this.position.y = height + this.r / 2;
    if (this.position.x - this.r / 2 > width) this.position.x = -(0.1 * this.r);
    if (this.position.y - this.r / 2 > height) this.position.y = -(0.1 * this.r);
  }

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    stroke(52, 152, 219, this.health);
    fill(52, 152, 219, this.health);
    ellipse(this.position.x, this.position.y, this.r, this.r);
  }

  // Death
  this.dead = function() {
    if (this.health < 0.0) {
      return true;
    } else {
      return false;
    }
  }

  this.energy = function() {
    //console.log("health");
    this.health = 200;
  }
}

function getLocation() {
  return createVector(random(width), random(height));
}

function getDNA() {
  return random(1);
}

function makeBlobs(num) {
  var blobs = [];
  for (var i = 0; i < num; i++) {
    blobs[i] = new Blob(getLocation(), getDNA());
  }
  return blobs;
}

function gameOver() {
  if (blobs.length == 0) {
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(236, 240, 241);
    text("Game Over", 300, 200);
    noLoop();
  }
}
