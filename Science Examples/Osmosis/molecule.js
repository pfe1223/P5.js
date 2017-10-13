function Molecule() {
  this.left = 0.5 > random(1); //left side or not
  if (this.left) {
    this.x = random(25, 210);
  } else {
    this.x = random(390, width - 25);
  }
  this.y = random(25, height - 25);
  this.vx = random(-1.5, 1.5); //x-velocity
  this.vy = random(-1.5, 1.5); //y-velocity
  this.stay = true; //must it stay in own half?

  this.show = function() {
    stroke(200);
    strokeWeight(4);
    if (!this.stay) {
      fill(255, 0, 0, 200);
    } else {
      fill(130, 130, 130, 200);
    }
    ellipse(this.x, this.y, 50, 50);
  }

  this.update = function() {
    //this.left = this.x < width / 2;
    this.x += this.vx;
    this.y += this.vy;
    this.show();
    this.bounce();
    if (this.left && this.x > width / 2) {
      this.stay = true;
      this.left = false;
    }
    if (!this.left && this.x < width / 2) {
      this.stay = true;
      this.left = true;
    }
  }

  this.bounce = function() {
    if (this.stay) {
      if ((this.x > width - 25) || (this.x < 25) || (this.vx > 0 && this.x < width / 2 && this.x + 25 > width / 2) || (this.x > width / 2 && this.vx < 0 && this.x - 25 < width / 2)) {
        this.vx *= -1;
      }
    } else {
      if (this.x > width - 25 || this.x < 25) {
        this.vx *= -1;
      }
    }
    if (this.y > height - 25 || this.y < 25) {
      this.vy *= -1;
    }
  }
}
