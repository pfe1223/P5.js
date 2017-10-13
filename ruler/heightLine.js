function hLine() {
  this.c = color(1, 162, 166);
  this.xpos = 20;
  this.y1pos = 100;
  this.y2pos = 300;
  this.length = this.y2pos - this.y1pos;

  this.show = function() {
    stroke(this.c);
    strokeWeight(4);
    line(this.xpos, this.y1pos, this.xpos, this.y2pos);
    fill(this.c);
    ellipse(this.xpos, this.y1pos, 8, 8);
    ellipse(this.xpos, this.y2pos, 8, 8);
  }

  this.update = function() {
    if (mouseIsPressed && dist(mouseX, mouseY, this.xpos, this.y1pos) < 4) {
      this.y1pos = mouseY;
    } else if (mouseIsPressed && dist(mouseX, mouseY, this.xpos, this.y2pos) < 4) {
      this.y2pos = mouseY;
    }

    this.length = this.y2pos - this.y1pos;
  }
}
