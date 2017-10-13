function MoveableTriangle() {
  //points of triangle
  this.p1 = createVector(width / 2, 150);
  this.p2 = createVector(this.p1.x - 50, 250);
  this.p3 = createVector(this.p1.x + 50, 250);

  //colors used
  this.outline = color(250, 50, 100);
  this.pointColor = color(250, 50, 100);
  this.triangleOutline = color(250, 50, 100);
  this.triangleFill = color(250, 50, 100, 50);

  //width and height of triangle
  this.w = 0;
  this.h = 0;

  //margins for text
  this.hMargin = 30;
  this.vMargin = 30;

  //draw the triangle
  this.show = function() {
    //draw the points
    noStroke();
    fill(this.pointColor);
    ellipse(this.p1.x, this.p1.y, 20, 20);
    ellipse(this.p2.x, this.p2.y, 20, 20);
    ellipse(this.p3.x, this.p3.y, 20, 20);

    //draw the triangle
    fill(this.triangleFill);
    strokeWeight(2);
    stroke(this.triangleOutline);
    triangle(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);
  }

  this.update = function() {
    //drag the points
    if (dist(this.p1.x, this.p1.y, mouseX, mouseY) < 10 && mouseIsPressed) {
      this.p1.x = mouseX;
      this.p1.y = mouseY;
    } else if (dist(this.p2.x, this.p2.y, mouseX, mouseY) < 10 && mouseIsPressed) {
      this.p2.x = mouseX;
    } else if (dist(this.p3.x, this.p3.y, mouseX, mouseY) < 10 && mouseIsPressed) {
      this.p3.x = mouseX;
    }

    //calculate width/height
    this.w = abs(this.p3.x - this.p2.x);
    this.h = abs(this.p2.y - this.p1.y);

    //write width/height to screen
    fill(255);
    noStroke();
    textSize(20);
    textAlign(LEFT, CENTER);
    text("Width: " + str(this.w), 0 + this.hMargin, this.vMargin);
    textAlign(RIGHT, CENTER);
    text("Height: " + str(this.h), width - this.hMargin, this.vMargin);
  }
}
