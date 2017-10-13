#Asteroids Video Game

##JavaScript
* Use "function" instead of void
* Use "var" for all variable declarations
* When practicing with students, make copies of the game template
* Use the P5 Editor, put a copy on each of the USB keys for students

##Download/Setup
* Use the Mac editor
* Go to the  P5Play website and download it
* Put the lib folder from P5Play into the sketch folder
* Also copy the P5Play script from the Getting Started link on P5Play
* Paste it into the index.html file
* In setup() write “createSprite(300, 200);”
* In draw() write “drawSprites();”
* Should see a box on the screen
* Have this done for the students

##Staring the Game
* Make an 800 by 600 canvas
* Set the color to black
* Make an ellipse(30, 30, 50, 50);
* Show students how the arguments change placement and size
* Make a rect(200, 200, 300, 300);
* Go over how to save work, change to browser, and refresh the page
* Go over colors (single number and triple numbers)
* Show how to color shapes with the fill command
    * If you want two colors, then two fill() commands
    * fill() command goes before the shape
* Show how to write text to the screen
    * textSize();
    * fill();
    * text("words", x, y);

##Key Concepts
* New sketch
* createCanvas(800, 400);
* set background to 50 in draw()
* Create var x = 70;
* Create var y = 30;
* Explain how variables hold values
* Draw an ellipse(70, 30, 50, 50);
* Now replace 70 and 30 with the above variables
* Increment x by 1
* Show how to increase speed by increasing the increment
* Comment out the x increment and increment y
* Show how to write an if-statement
    * If x is off the page, reset
    * Half of the circle is off the page, add half of circle
    * Make a conditional for y

##Animating Backwards
* New file
* Canvas 800 by 600
* Setbackground to 100
* Create x = 50 and y = 50
* ellipse(x, y, 70 70);
* Increment x by one, then subtract one to move the other way
* Make conditional to have ball come off left side and come back
* Do the same thing for y (subtracting)

##Loops, Arrays, and Mouse Clicks
* In setup() make a for-loop
    * for(i=0; i<10, i++)
    * println(i);
    * Check the console for the output
* Introduce arrays with provided picture
    * Mention how you group similar things together with arrays
    * Make an array at the top of the page
        * var arr = [];
        * Make a variable temp
    * In the for-loop
      * set the variable temp to random(0, 20);
      * Put temp value in array - arr[i] = temp;
    * After the for-loop finishes, print(arr);
*  In draw() do an if(mouseIsPressed){}
    * Make some vars r = 100; g = 100; b = 100;
    * Set background() to the r, g, and b variables
    * If the mouse is pressed set r to 101, g to 44, and b to 144
    * Show kids how this works
    * Then add an else statement to reset r, g, and b back to 100
* Make a var img;
* Make a new function called preload "function preload(){}"
    * This is the first function to run
    * Write img = imageLoad("x70.png");
    * Highlight that only images in that folder can be used
* In draw() write image(img, 200, 200);

##Building the Game
* Start a new sketch, add setup() and draw()
* Create a 800 by 600 canvs
* Make background 50
* In setup() use createSprite(width/2, height/2);
* In draw() write drawSprites();
    * If you refresh the page the sprite should change color
* Make a var ship;
* Make ship = createSprite(width/2, height/2);
* Stil in setup() write ship.addImage();
* Make a preload function before setup();
    * write loadImage("ship4.png");
    * make a temp1 var up above
    * assign the above loadImage to temp1
* In setup() ship.addAnimation("normal", "ship1.png", "ship4.png");
* Also add ship.setCollider("rectangle", 0, 0, 100, 150);
* Add ship.debug = true;
* The collider will be too small, adjust the numbers to make it fit better (200 by 280)
* Add ship.scale = 0.7;
* In setup() make a for-loop to create the astroid sprites
    * loop 10 times
    * use var s = createSprite(random(0, width), random(0, height)); command each time
    * then use s.setSpeed(random(3, 5), random(0, 360)); command to set the speed and angle
* up top, create a new var asteroids;
    * above the for-loop make asteroids a group: asteroids = new Group();
    * then, inside the for-loop, add the local variable s to the asteroids group: asteroids.add(s);
    * inside draw(), make a for-loop: for(var i = 0, i < allSprites.length; i++){}
    * inside this loop, write var s = allSprites[i];
    * up top, make a variable called margin and set it to 40
    * also add this. if(s.position.x > width + margin) then s.position.x = -margin;
    * if s.position.x < -margin then s.position.x = width + margin;
    * do the same thing for s.position.y
* before the drawSprites() command write ship.bounce(asteroids);
* change the ship.addImage command to ship.addImage("normal", tempI);
* change ship.addAnimation to ship.addAnimation("thrust", "ship1.png", "ship4.png");
* in setup() change tempI to tempI = loadImage("ship1.png");
* change the scale command to 0.5
* after the scale write ship.maxSpeed = 6;
* then add ship.friction = 0.98;
* in draw() (after background) write fill(255); textAlign(CENTER); text("Controls: Arrow keys + x", width/2, 20);
* in draw() after you make the sprites warp across edge of the screen, write: if(keyDown(LEFT_ARROW)){ship.rotation = ship.rotation - 4;}
* do the same thing for the right arrow key
* if UP_ARROW then ship.changeAnimation("thrust");
    * also write this: ship.addSpeed(0.2, ship.rotation - 90);
    * have to minus 90 because 0 degrees is what we consider 90 degrees
    * add an else statement: ship.chagneAnimatin("normal");
* change the collision area from a rectangle to a circle, set 200 as diameter
    * still too big, set collision area to 150
* in the preload function, loadImage("y_bullet.png");
    * create var tempI2 up top
    * set tempI2 to the loaded bullet image
* in draw(), if(keyWentDown('x')){var b = createSprite(ship.posision.x, ship.position.y); b.addImage(tempI2); b.scale(0.3); b.setSpeed(10 + ship.getSpeed(), ship.rotation - 90; b.life = 30;}
* in setup() create bullets = new Group();
    *  declare bullets variable up top
    *  in firing conditional add bullets.add(b);
*  show difference between keyDown and keyWentDown
*  in the asteroid loop, comment out all the code, ship should be alone
*  in the asteroid loop, make var px = random(0, width); var py = random(0, height);
*  write createAsteroid(2, px, py);
*  after draw(): function createAsteroid(type, x, y){var a = createSprite(x, y); var img = loadImage("asteroid" + floor(random(1, 5)) + ".png"); a.addImage(img); a.setSpeed(2.5 - (type/2), random(0, 360)); a.rotationSpeed = random(-0.5, 0.5); a.debug = true; a.type = type; if(type == 3){a.scale = 0.7;} if(a.type == 2){a.scale = 0.4;} if(a.type == 1){a.scale = 0.2;} a.mass = 2 + a.scale; a.setCollider("cricle", 0, 0, 80); asteroids.add(a); }
*  explain string concatenation: get a random asteroid image to use 
*  in draw() before ship.bounce(asteroids);, asteroids.overlap(bullets, asteroidHit);
*  asteroidHit is a user define function
*  function asteroidHit(asteroid, bullet){var newType = asteroid.type - 1; if(newType > 0){ createAsteroid(newType, asteroid.position.x, asteroid.position.y); createAsteroid(newType, asteroid.position.x, asteroid.position.y);} bullet.remove(); asteroid.remove();}
*  turn off the debugging for ship and asteroids
*  scale ship to 0.35;
*  up top add sound1, sound2, and sound3 variables (no value)
*  in the preload function, sound1 = loadSound("1.mp3"); sound2 = loadSound("2.mp3"); sound3 = loadSound("blip.wav");
*  in keyWentDown, sound1.play(); 
*  in asteroidHit function, sound3.play(); 
*  find ship.bounce, change to ship.bounce(asteroids, playSound);
*  create a playSound function
    *  function playSound(){sound2.play();}