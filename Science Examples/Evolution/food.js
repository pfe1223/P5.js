function Food() {
  this.position = createVector(random(15, width - 15), random(15, height - 15));
  this.size = 10;
}

function makeFood(num) {
  var food = [];
  for (var i = 0; i < num; i++) {
    food[i] = new Food;
  }
  return food;
}

function displayFood(food) {
  if (random(1) < 0.005) {
    food.push(new Food);
  }
  for (var i = 0; i < food.length; i++) {
    noStroke();
    fill(240, 10, 10);
    ellipse(food[i].position.x, food[i].position.y, food[i].size, food[i].size);
  }
}
