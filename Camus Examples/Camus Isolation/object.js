function Object(x, y) {
  this.originX = x;
  this.originY = y;
  this.x = this.originX;
  this.y = this.originY;
  this.move = 3;

  this.show = function() {
    fill(250, 15, 150);
    ellipse(this.x, this.y, 30, 30);
  }

  this.update = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < 35) {
      if (mouseY < this.y) {
        this.y += this.move;
      }

      if (mouseY > this.y) {
        this.y -= this.move;
      }

      if (mouseX < this.x) {
        this.x += this.move;
      }

      if (mouseX > this.x) {
        this.x -= this.move;
      }
    } else {
      if (this.y != this.originY || this.x != this.originX) {
        this.y += (this.originY - this.y) * 0.03;
        this.x += (this.originX - this.x) * 0.03;
      }
    }
  }
}
