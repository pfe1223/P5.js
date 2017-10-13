function Mover(m, x, y) {
  this.loc = createVector(x, y);
  this.vel = createVector(0, 0);
  this.accel = createVector(0, 0);
  this.mass = m;

  this.show = function() {
    fill(90);
    strokeWeight(3);
    ellipse(this.loc.x, this.loc.y, this.mass * 16, this.mass * 16);
  }

  this.checkEdge = function() {
    if (this.loc.x > width || this.loc.x < 0) {
      this.vel.x *= -1;
    }

    /*if (this.loc.y > height || this.loc.y < 0) {
      this.vel.y *= -1;
    }*/

    if (this.loc.y > height) {
      this.vel.y *= -1;
      this.loc.y = height;
    }
  }

  this.update = function() {
    this.vel.add(this.accel);
    this.loc.add(this.vel);
    this.accel.mult(0);
  }

  this.applyForce = function(force) {
    var f = createVector(0, 0);
    f = force.copy();
    f.div(this.mass);
    this.accel.add(f);
  }
}
