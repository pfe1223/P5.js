function Ground() {
  var options = {
    isStatic: true
  }
  this.body = Bodies.rectangle(200, height, width, 100, options);
  World.add(world, this.body);

  this.show = function() {
    stroke(255);
    fill(170);
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, width, 100);
  }
}
