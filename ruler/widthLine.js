function wLine() {
  this.c = color(217, 24, 59);
  this.ypos = 380;
  this.x1pos = 100;
  this.x2pos = 300;
  this.length = this.x2pos - this.x1pos;

  this.show = function() {
    stroke(this.c);
    strokeWeight(4);
    line(this.x1pos, this.ypos, this.x2pos, this.ypos);
    fill(this.c);
    ellipse(this.x1pos, this.ypos, 8, 8);
    ellipse(this.x2pos, this.ypos, 8, 8);
  }

  this.update = function() {
    if (mouseIsPressed && dist(mouseX, mouseY, this.x1pos, this.ypos) < 4) {
      this.x1pos = mouseX;
    } else if (mouseIsPressed && dist(mouseX, mouseY, this.x2pos, this.ypos) < 4) {
      this.x2pos = mouseX;
    }
    this.length = this.x2pos - this.x1pos;

  }
}
