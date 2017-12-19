# Probability EPI

* Create a basic program with a canvas (400 by 400) and a black background
* Make sure this is working in the live server
* Next we need to add the input field and button
  * Create two variables `input` and `button`
  * Make an empty paragraph element to push the `input` and `button` to a new line
  * Create new elements with `input` and `button` (with labels)
  * Use `noLoop()` to stop the `draw` function from running again and again

~~~
var input, button;

function setup(){
  createCanvas(400, 400);
  createP('');
  input = createInput("Nombre de points");
  button = createButton("Aller");
  noLoop();
}

function draw(){
  background(0);
}
~~~

* Now we are going to add a circle that has the same diameter as the width of the canvas
  * Choose any color you want
  * Set the `strokeWeight` to something you can easily see
  * Use `noFill()` as well

~~~
stroke(150, 50, 150);
strokeWeight(3);
noFill();
ellipse(width / 2, height / 2, width);
~~~

* Set a callback for the `button` in `setup`, call it `makePoints`

~~~
button.mousePressed(makePoints);
~~~

* Create the `makePoints` function after `draw`

~~~
function makePoints(){

}
~~~

* We need three variables:
  * `points` which is the total number of points; this comes from the `input` field
  * `insideCircle` which is number of points inside the circle
  * `outsideCircle` which is the number of points outside the circle
  * `ratio` which is the ratio of points inside the circle to points outside the circle

~~~
var points = input.value();
var insideCircle = 0;
var outsideCircle = 0;
var ratio = 0;
~~~

* Next we want a loop that runs as many times as the number of points
  * Set the `fill` and `strokeWeight` for each point
  * Generate a random `x` and `y` location in local variables
  * Make a point at this random location
  * Test to see if the point is inside the circle
    * Use the `dist` formula
    * Increment `insideCircle` if the point is inside the circle

~~~
for (let i = 0; i < points; i++) {
  strokeWeight(2);
  stroke(50, 150, 50);
  let x = random(width);
  let y = random(height)
  point(x, y);
  if (dist(x, y, width / 2, height / 2) < width / 2) {
    insideCircle++;
  }
}
~~~

* Now that we know the total number of points and the points inside the circle, we can now calculate the number of points outside the circle and the ratio

~~~
outsideCircle = points - insideCircle;
ratio = insideCircle / outsideCircle
~~~

* Last, we are going to write this information to the screen
  * Use the `createP` command for each line of text
  * Don't forget the trailing spaces so the words are kept separate from the numbers
  * Use the `.position` method to properly align the information to the right of the canvas

~~~
createP("Les points à l'intérieur: " + insideCircle).position(410, 0);
createP("Les points à l'extérieur: " + outsideCircle).position(410, 20);
createP("Le ratio: " + ratio).position(410, 40);
~~~
