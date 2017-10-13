function Symmetry() {
  this.start = 0;
  this.stop = 0;
  this.dx = 0;
  this.dy = 0;
  this.xoff = 0;
  this.resolution = 1;
  this.da;

  this.show = function() {
    //angleMode(DEGREES);
    this.da = PI / this.resolution;
    translate(width / 2, height / 2);
    rotate(-PI / 2);
    fill(255, 50);
    stroke(255);
    strokeWeight(1);
    beginShape();
    for (let a = this.start; a < this.stop; a += this.da) {
      let n = noise(this.xoff);
      let r = map(n, 0, 1, 50, 210);
      let x = r * cos(a);
      let y = r * sin(a);
      if (a < PI) {
        this.xoff += this.dx;
      } else {
        this.xoff -= this.dx;
      }
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
