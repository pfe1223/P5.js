var ship;
var temp1;
var asteroids;
var margin = 40;
var temp2;
var bullets;

function preload(){
	temp1 = loadImage("ship1.png");
	temp2 = loadImage("y-bullet.png");
}

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
  
  asteroids = new Group();
  bullets = new Group();
  
  for(var i = 0; i < 10; i++){
  	//var s = createSprite(random(0, width), random(0, height));
  	//s.setSpeed(random(3, 5), random(0, 360));
  	//asteroids.add(s);
  	
  	var px = random(width);
  	var py = random(height);
  	
  	createAsteroid(3, px, py);
  }
}

function draw(){
  background(50);
  
  fill(255);
  textAlign(CENTER);
  text("Controls: Arrow keys + x", width/2, 20);

  for (var i = 0; i < allSprites.length; i++){
    var s = allSprites[i];
    
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
    var b = createSprite(ship.position.x, ship.position.y);
    b.addImage(temp2);
    b.scale = 0.3;
    b.setSpeed(10 + ship.getSpeed(), ship.rotation - 90);
    b.life = 30;
    bullets.add(b);
  }
  
  asteroids.overlap(bullets, asteroidHit);
  
  ship.bounce(asteroids);
  
  drawSprites();
}

function createAsteroid(type, x, y){
  var a = createSprite(x, y);
  var img = loadImage("asteroid" + floor(random(1, 5)) + ".png");
  a.addImage(img);
  a.setSpeed(2.5 - type/2, random(0, 360));
  a.rotationSpeed = random(-0.5, 0.5);
  a.debug = false;
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
  
  a.mass = 2 + a.scale;
  a.setCollider("circle", 0, 0, 80);
  asteroids.add(a);
}

function asteroidHit(asteroid, bullet){
  var newType = asteroid.type - 1;
  
  if(newType > 0){
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
  }
  
  bullet.remove();
  asteroid.remove();
}