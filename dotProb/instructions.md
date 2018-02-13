# Probability EPI

* Create a basic program in the `setup` with:
	* canvas (400 by 400)
	* black background
	* an ellipse that spans the canvas
* We will not use a `draw` function
* Make sure this is working in the live server

~~~
function setup(){
  createCanvas(400, 400);
  background(0);
  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width, height);
}
~~~

* Next we need to add the input field and button
  * Create two variables `input` and `button`
  * Make an empty paragraph element to push the `input` and `button` to a new line
  * Create new elements with `input` and `button` (with labels)

~~~
let input, button;

function setup(){
  createCanvas(400, 400);
  background(0);
  stroke(150, 50, 150);
  strokeWeight(3);
  noFill();
  ellipse(width / 2, height / 2, width);
  
  createP('');
  input = createInput("Number of Points");
  button = createButton("Go");
}
~~~

* Set a callback for the `button` in `setup`, call it `makePoints`

~~~
button.mousePressed(makePoints);
~~~

* Create the `makePoints` function after `setup`
* We want this function to clear the canvas every time it is run, so be sure to set the background to the same color as in the `setup` function

~~~
function makePoints(){
  background(0);
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
  strokeWeight(3);
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

* Since we do not want the green points to cover up the the circle on the canvas, we are going to redraw the same circle from the `setup` function

~~~
stroke(150, 50, 150);
strokeWeight(3);
ellipse(width / 2, height / 2, width);
~~~

* Go ahead and test your code. You should be able to enter a number, click the button, and see the same number of points appear
* Last, we are going to write this information to the screen
* Go back to the top of the code, and add the variables `insideInfo`, `outsideInfo`, and `ratioInfo` to the list of variables

~~~
let input, button, insideInfo, outsideInfo, ratioInfo;
~~~

* Go into the `setup` function and define each of these variables as a `createP` with a message

~~~
insideInfo = createP("Points inside the circle: 0");
outsideInfo = createP("Points outside the circle: 0");
ratioInfo = createP("Ratio of points inside to outside: 0");
~~~

* But these elements are below `input` and the `button`. Use the `.position` method to properly align the information to the right of the canvas

~~~
insideInfo = createP("Points inside the circle: 0").position(415, 0);
outsideInfo = createP("Points outside the circle: 0").position(415, 20);
ratioInfo = createP("Ratio of points inside to outside: 0").position(415, 40);
~~~

* Now go back to the `makePoints` function. We want to update these elements when we click the "Go" button.
* After we draw the circle atop the random points, we need to update the contents of `insideInfo`, `outsideInfo`, and `ratioInfo`. We do that with the `.html` method.
* Take the same message as above, but remove the "0" and append the corresponding variable
* Don't forget to leave the trailing blank space

~~~
insideInfo.html("Points inside the circle: " + insideCircle);
outsideInfo.html("Points outside the circle: " + outsideCircle);
ratioInfo.html("Ratio of points inside to outside: " + ratio);
~~~

* Go ahead and test your program. You should the dots drawn to the canvas, as well as the information being updated on the right