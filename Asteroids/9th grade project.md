#Asteroids
## Getting the Game Template
* Download the template for the game.
* Find the zip file in your `Downloads` folder.
* Double-click on the template.
* Open `Atom`.
* Click `File` and select `Open project folder`.
* Find the game template in your `Downloads` folder and double-click it.

##Unit 1 - Sprites
###Creating a Ship Sprite
* Objects in a video game are called sprites.
* The `createSprite(x, y);` command creates a sprite at the given x and y-coordinates.
* The `drawSprites();` command draws all of the sprites to the screen.
* Now let's create a sprite in the middle of the canvas.

~~~
function setup(){
  createCanvas(800, 600);
  
  createSprite(width/2, height/2);
}

function draw(){
  background(50);
  
  drawSprites();
}
~~~

###Loading the Ship Image
* Click on the ">" on the far left of the screen, this will open all of the assests associated with the game.
* Set the value of `ship` to the created sprite.
* We are also going to add an image to `ship` so we no longer see a square.
* In the `preload` function, create a variable `temp1` that will hold the loaded image.
* Use `temp1` when adding an image to `ship`.

~~~
function preload(){
	temp1 = loadImage("ship4.png");
}

function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
}
~~~

###Adding the Ship Image
* Next we need to add an animation to the ship.
* Use `ship.addAnimation` and give it a name for the animation, the first image, and the last image (it will act like a flip book).

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
}
~~~

###Adding Ship Collider
* Now we need to add a collider to the ship.
* A collider sets the limit of the sprite. Colliders allow the computer to know if two sprites are touching one another.
* The code `ship.setCollider` needs to know the shape of the limit, how far to offset from the x-position, how far to offset from the y-position, its width, and its height.
* To see the collider, you need to turn on the debug mode with `ship.debug`.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 100, 150);
  ship.debug = true;
}
~~~

* The collider is too small.
* Adjust the width and the height to make sure the collider goes around the ship.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 280);
  ship.debug = true;
}
~~~

###Scale the Ship
* The ship is too big.
* Use the `scale` command to change the size.
* Set the scale between 0 and 1 to reduce the size.
* All scales larger than 1 will make the sprite bigger.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.7;
}
~~~

###Creating the Asteroids
* Use a for-loop in `setup()` to make 10 asteroids.
* Each time use the `createSprite` command to make a new sprite.
* Put this new sprite into the variable `s`.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.7;
  
  for(let i = 0; 0 < 10; i++){
  	let s = createSprite(random(0, width), random(0, height));
  }
}
~~~

###Moving the Asteroids
* To make these asteroids move, use the `setSpeed` command.
* `setSpeed` needs to know how fast to move and in which direction.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.7;
  
  for(let i = 0; 0 < 10; i++){
  	let s = createSprite(random(0, width), random(0, height));
  	s.setSpeed(random(3, 5), random(0, 360));
  }
}
~~~

###Creatig Group of Asteroids
* In order to see if the asteroids are touching the ship, we need to add `s` to a group called `asteroids`.
* A group is similar to an array in that it is a list of similar objects.
* Make asteroids a new group (in `setup()`).
* Add each asteroid to the `asteroids` group.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage(temp1);
  ship.addAnimation("normal", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.7;
  
  asteroids = new Group();
  
  for(let i = 0; i < 10; i++){
  	let s = createSprite(random(0, width), random(0, height));
  	s.setSpeed(random(3, 5), random(0, 360));
  	asteroids.add(s);
  }
}
~~~

###Bringing the Sprites Back
* Notice how the asteroids leave the canvas and do not return.
* In the `draw()` function make another for-loop.
* The loop should run as long as `i` is less than the length of the group `allSprites` which contains all of the sprites on the canvas.
* Set the value of `s` to `allSprites[i]`.
* Check to see if the `x` and `y` positions are on the canvas (conditional).
* If yes, keep moving. If not, reset them to the opposite side of the canvas.
* Make sure you use `width` and `height` plus `margin` so that the sprites are fully off the canvas before moving to the opposite side.

~~~
function draw(){
  background(50);

  for (let i = 0; i < allSprites.length; i++){
    let s = allSprites[i];
    
    if (s.position.x > width + margin){
      s.position.x = -margin;
    }
    
    if (s.position.x < -margin){
      s.position.x = width + margin;
    }
    
    if (s.position.y > height + margin){
      s.position.y = -margin;
    }
    
    if (s.position.y < -margin){
      s.position.y = height + margin;
    }
  }
  
  drawSprites();
}
~~~

###Collision
* Notice how the asteroids pass right through the ship.
* In `draw()` write `ship.bounce(asteroids);` before `drawSprites`.
* The asteroids should now bounce off of the ship.
* The bouncing action should move the ship, which should move to the opposite side when leaving the canvas.

~~~
function draw(){
  background(50);

  ...
    
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

##Unit 2 - Moving the Ship
###Animating the Thrusters

* The thrusters should not be animated when the ship is not moving.
* Edit `ship.addImage` to include the string `"normal"` before `temp1`.
* Edit `ship.addAnimation` such that `"normal"` becomes `"thrust"`.
* Change `loadImage` such that `"ship4.png"` becomes `"ship1.png"`.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage("normal", temp1);
  ship.addAnimation("thrust", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.7;
  
  ...
}
~~~

###Tweaking the Ship
* The ship is still a little big.
* Change `ship.scale` to 0.5.
* To keep the ship from moving too fast, use `ship.maxSpeed` to limit the ship's speed to 6.
* The ship needs to slow down on its own. Use `ship.friction` and set it to 0.98.
* If `friction` is too big the ship flies around the screen too fast.
* If `friction` is too small it won't move in a pleasing way.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage("normal", temp1);
  ship.addAnimation("thrust", "ship1.png", "ship4.png");
  ship.setCollider("rectangle", 0, 0, 200, 300);
  ship.debug = true;
  ship.scale = 0.5;
  ship.maxSpeed = 6;
  ship.friction = 0.98;
  
  ...
}
~~~

###Adding Instructions
* The user has no idea how to play the game.
* Use `fill(255);` to make the text white.
* Use `textAlign(CENTER);` to make the text centered.
* Use the `text("Controls: Arrow keys + x", width/2, 50);` command to add instructions to the top of the screen.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
}
~~~

###Rotating to the Left
* The time has come to move the ship with the arrow keys.
* In `draw()` use `if (keyDown (ARROW_LEFT))` to determine if the left arrow key has been pressed.
* If yes, modify `ship.rotation` such that the ship rotates 4 degrees to the left.
* Note, rotating to the left is a *negative* change.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
    
  if(keyDown(LEFT_ARROW)){
    ship.rotation = ship.rotation - 4;
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Rotating to the Right
* The ship does not rotate to the right when the right arrow is pressed.
* Write a conditional that checks to see if the right arrow is being pressed.
* If yes, rotate the ship 4 degrees to the right.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
  
  if(keyDown(LEFT_ARROW)){
    ship.rotation = ship.rotation - 4;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ship.rotation = ship.rotation + 4;
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Moving Forward
* To move forward, check to see if the up arrow is being pressed.
* Use `ship.addSpeed` to increase the ships speed.
* In addition to moving, remember that the thrust animation should play.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
  
  if(keyDown(LEFT_ARROW)){
    ship.rotation = ship.rotation - 4;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ship.rotation = ship.rotation + 4;
  }
  
  if(keyDown(UP_ARROW)){
    ship.changeAnimation("thrust");
    ship.addSpeed(0.2, ship.rotation);
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Fixing the Movement
* Did you see the problems?
* First, the ship "faces" to the right. So all movement will be to the right.
* Subtract 90 degrees from the ship's rotation to move in the direction of the sprite.
* The second problem is that the thrusters turn on when you hit the up arrow, but they do not turn off when you let go.
* Add an `else` statement after the conditional that changes the animation back to `"normal"`.
* `else` statements are only executed if the conditional is false.
* `else` statements are skipped if the conditional is true.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
  
  if(keyDown(UP_ARROW)){
    ship.changeAnimation("thrust");
    ship.addSpeed(0.2, ship.rotation - 90);
  } else {
    ship.changeAnimation("normal");
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Adjusting Collision Area
* What do you notice about the collision area?
* Yup, it changes size as you rotate the ship.
* Modify `ship.setCollider` such that `"rectangle"` becomes `"circle"`.
* Keep the x and y-offsets as `0` and `0`.
* Circles do not have a width and a height; instead they have a diameter.
* Erase one of the numbers, and make the remaining number is 150.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage("normal", temp1);
  ship.addAnimation("thrust", "ship1.png", "ship4.png");
  ship.setCollider("circle", 0, 0, 150);
  ship.debug = true;
  ship.scale = 0.5;
  ship.maxSpeed = 6;
  ship.friction = 0.98;
  
  ...
}
~~~

##Unit 3 - Adding Bullets
###Loading the Bullet
* In `preload()` set the value of `temp2` to `loadImage("y_bullet.png")`.

~~~
function preload(){
	temp1 = loadImage("ship1.png");
	temp2 = loadImage("y_bullet.png");
}
~~~

###Drawing the Bullets to the Canvas
* Write a conditional to see if the `x` key is being pressed.
* Instead of `keyDown` use `keyWentDown`.
* This keeps the ship from firing a bullet for each fraction of a second the `x` key is pressed.
* One button press, one bullet.
* Create a variable `b` that hold a newly created sprite at the same x and y-positions as the ship.
* Now add the image in `temp2` to the variable `b`.
* Scale the bullet down to 30%.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...

  if(keyDown(UP_ARROW)){
    ship.changeAnimation("thrust");
    ship.addSpeed(0.2, ship.rotation - 90);
  } else {
    ship.changeAnimation("normal");
  }
  
  if(keyWentDown("x")){
    let b = createSprite(ship.position.x, ship.position.y);
    b.addImage(temp2);
    b.scale = 0.3;
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Moving the Bullets
* The problem is the bullets have no speed.
* Use `b.setSpeed` command to change the speed of the bullet.
* The speed should 10 more than the current speed of the ship.
* The speed of the bullet should also fire in the same direction as the ship.
* Don't forget, we had to subtract 90 from the ship's rotation so it will flight straight. You must do the same thing for the bullets.

~~~
function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...

  if(keyWentDown("x")){
    let b = createSprite(ship.position.x, ship.position.y);
    b.addImage(temp2);
    b.scale = 0.3;
    b.setSpeed(10 + ship.getSpeed(), ship.rotation - 90);
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~
###Adjusting the Bullets

* Notice a problem? The bullets never go away.
* Set the `life` of the bullets to 30.
* Each bullet sprite needs to be added to a group called `bullets`.
* Make a variable called `bullets`.
* In `setup()` set bullets to a new group.
* Add `b` to `bullets`.
* Show difference between `keyDown` vs. `keyWentDown`.

~~~
function setup(){
  createCanvas(800, 600);
  
  ...
  
  asteroids = new Group();
  bullets = new Group();
  
  for(let i = 0; i < 10; i++){
  	let s = createSprite(random(0, width), random(0, height));
  	s.setSpeed(random(3, 5), random(0, 360));
  	asteroids.add(s);
  }
}

function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  ...
  
  if(keyDown(LEFT_ARROW)){
    ship.rotation = ship.rotation - 4;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ship.rotation = ship.rotation + 4;
  }
  
  if(keyDown(UP_ARROW)){
    ship.changeAnimation("thrust");
    ship.addSpeed(0.2, ship.rotation - 90);
  } else {
    ship.changeAnimation("normal");
  }
  
  if(keyWentDown("x")){
    let b = createSprite(ship.position.x, ship.position.y);
    b.addImage(temp2);
    b.scale = 0.3;
    b.setSpeed(10 + ship.getSpeed(), ship.rotation - 90);
    b.life = 30;
    bullets.add(b);
  }
  
  ship.bounce(asteroids);
  
  drawSprites();
}
~~~

###Calling createAsteroid
* The asteroid sprites need to become an actual image instead of a square.
* Comment out the code in the for-loop in `setup()`.
* Instead, create local variables `px` and `py`.
* Make these variables random on the page.
* Now call a function called `createAsteroid()`.
* Pass this function the number 3, `px`, and `py`.
* Notice, if we run the program we get an error.
* The computer does not know what `createAsteroid` is.

~~~
function setup(){
  createCanvas(800, 600);
  
  ...
  
  for(let i = 0; i < 10; i++){
  	//let s = createSprite(random(0, width), random(0, height));
  	//s.setSpeed(random(3, 5), random(0, 360));
  	//asteroids.add(s);
  	
  	let px = random(width);
  	let py = random(height);
  	
  	createAsteroid(3, px, py);
  }
}
~~~

###Defining createAsteroid
* Find the `createAsteroid` function toward the bottom of the program.
* Define `creatAsteroid` and give the parameters the variables `type`, `x`, and `y`.
* Run the program. Error goes away, but no asteroid sprites.
* `type` becomes 3, `x` becomes `px`, and `y` becomes `py`.
* In `createAsteroid`, create a local variable `a` and assign it the value of `createSprite`.
* Explain how to get a random image for the asteroid through string concatenation.
* Create local variable `img` and assign it the value of a random asteroid image.
* Add this image to `a`.
* Run the program and see the asteroids appear but not move.
* Now use `a.setSpeed` to set the speed to `2.5 - type/2` and the rotation to `random(0, 360)`.
* Run the code, the asteroids should be moving.
* Have the asteroids rotate with `rotationSpeed` and make them rotate with `random(-0.5, 0.5)`.
* This will make them rotate to the left or to the right.
* Run the code. The asteroids should be rotating and moving.
* Turn on debug for asteroids.

~~~
function createAsteroid(type, x, y){
  let a = createSprite(x, y);
  let img = loadImage("asteroid" + floor(random(1, 5)) + ".png");
  a.addImage(img);
  a.setSpeed(2.5 - type/2, random(0, 360));
  a.rotationSpeed = random(-0.5, 0.5);
  a.debug = true; 
}
~~~

###Giving the Asteroids "Lives"
* Think of `type` as being the number of lives that each asteroid has.
* They start off with `type` equal to 3; so they have 3 lives.
* When an asteroid is shot, it should split into two, and each new asteroid should have 2 lives remaining.
* Asteroids should become smaller when they lose a life as well.
* Continue you this process until `type` is equal to 0; i.e. the asteroids have no more remaining lives.
* Start off by making `a.type` equal to `type`.
* Now lets test to see if `type` is equal to 3, 2, or 1. Scale the asteroids accordingly.

~~~
function createAsteroid(type, x, y){
  let a = createSprite(x, y);
  let img = loadImage("asteroid" + floor(random(1, 5)) + ".png");
  a.addImage(img);
  a.setSpeed(2.5 - type/2, random(0, 360));
  a.rotationSpeed = random(-0.5, 0.5);
  a.debug = true;
  a.type = type;
  
  if(type == 3){
    a.scale = 0.7;
  }
  
  if(type == 2){
    a.scale = 0.4;
  }
  
  if(type == 1){
    a.scale = 0.2;
  }
}
~~~

###Tweaking the Asteroids
* Give the asteroids a mass related to their size.
* Add a collider to each asteroid; use `"cricle"`, `0`, `0`, `80`.
* Run the progam. Asteroids are not bouncing because they are not a part of the `asteroids` group.
* Add each asteroid to the `asteroids` group.
* Things should look almost normal now.

~~~
function createAsteroid(type, x, y){
  
  ...
    
  if(type == 1){
    a.scale = 0.2;
  }
  
  a.mass = 2 + a.scale;
  a.setCollider("circle", 0, 0, 80);
  asteroids.add(a);
}
~~~

###asteroidHit Function
* We have two groups, `asteroids` and `bullets`.
* If items of each group overlap with one another, then an asteroid is hit.
* In `draw()` ask if the `asteroids` group is overlapping with the `bullets` group.
* If yes, call the function `asteroidHit`.
* `asteroidHit` is a user defined function so define it at the bottom of the program.
* `asteroidHit` takes two parameters, `asteroid` and `bullet`.
* Create a variable `newType` and assign it the value of the `asteroid.type` minus 1.
* If `newType` greater than 0, then remove the original asteroid and replace t with two smaller ones.
* Remove the original asteroid and the bullet.

~~~
function draw(){
  background(50);
  
  ...
  
  asteroids.overlap(bullets, asteroidHit);
  
  ship.bounce(asteroids);
  
  drawSprites();
}

function asteroidHit(asteroid, bullet){
  let newType = asteroid.type - 1;
  
  if(newType > 0){
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
  }
  
  bullet.remove();
  asteroid.remove();
}
~~~

##Unit 4 - Final Touches
###Turn Off Debugging
* Set the `debug` mode to false for the ship and the asteroids.
* Scale down the ship to 35%.

~~~
function setup(){
  createCanvas(800, 600);
  
  ship = createSprite(width/2, height/2);
  ship.addImage("normal", temp1);
  ship.addAnimation("thrust", "ship1.png", "ship4.png");
  ship.setCollider("ellipse", 0, 0, 150);
  ship.debug = false;
  ship.scale = 0.35;
  ship.maxSpeed = 6;
  ship.friction = 0.98;
  
  ...
}
~~~