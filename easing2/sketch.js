var px = 0;
var bg1, bg2, bg3;
var easing1 = 0.1;
var easing2 = 0.13;
var easing3 = 0.075;
var playerSize = 25;
var bgSize = 40;
var playerRadius = playerSize / 2;
var bgRadius = bgSize / 2;
var speed = 5;
var limit1 = 120;
var limit2 = 120;
var limit3 = 120;

function setup() {
  createCanvas(500, 250);
  bg1 = height;
  bg2 = height;
  bg3 = height;
  noStroke();
}

function draw() {
  background(120);
  updateGame();
  drawGame();

}

function drawGame(){
  //bg1 - bad guys 1, 2, and 3
  fill(230, 30, 119);
  ellipse(100, bg1 - bgRadius, bgSize, bgSize);
  ellipse(200, bg2 - bgRadius, bgSize, bgSize);
  ellipse(300, bg3 - bgRadius, bgSize, bgSize);

  //player
  fill(120, 120, 230);
  ellipse(px + playerRadius, height - playerRadius, playerSize, playerSize);
}

function updateGame(){
  updatePlayer();
  updateBadGuys();
  checkDistance();
}

function updatePlayer(){
  if(keyIsDown(LEFT_ARROW) && (px > 0)){
    px = px - speed;
  }

  if (keyIsDown(RIGHT_ARROW) && (px < (width - playerSize))) {
    px = px + speed;
  }
}

function updateBadGuys(){
  //This code changes the limit for bg1
  if((bg1 < (limit1 + 1)) && (limit1 === 120)){
    limit1 = height;
  } else if ((bg1 > (limit1 - 1)) && (limit1 === height)) {
    limit1 = 120
  }

  //This code moves bg1 with easing1
  if((bg1 > limit1) && (limit1 === 120)){
    bg1 -= abs((limit1 - bg1)) * easing1;
  } else if ((limit1 === (height)) && (bg1 < limit1)) {
    bg1 += (limit1 - bg1) * easing1;
  }

  //This code changes the limit for bg2
  if((bg2 < (limit2 + 1)) && (limit2 === 120)){
    limit2 = height;
  } else if ((bg2 > (limit2 - 1)) && (limit2 === height)) {
    limit2 = 120
  }

  //This code moves bg3 with easing2
  if((bg2 > limit2) && (limit2 === 120)){
    bg2 -= abs((limit2 - bg2)) * easing2;
  } else if ((limit2 === (height)) && (bg2 < limit2)) {
    bg2 += (limit2 - bg2) * easing2;
  }

  //This code changes the limit for bg3
  if((bg3 < (limit3 + 1)) && (limit3 === 120)){
    limit3 = height;
  } else if ((bg3 > (limit3 - 1)) && (limit3 === height)) {
    limit3 = 120
  }

  //This code moves bg1 with easing3
  if((bg3 > limit3) && (limit3 === 120)){
    bg3 -= abs((limit3 - bg3)) * easing3;
  } else if ((limit3 === (height)) && (bg3 < limit3)) {
    bg3 += (limit3 - bg3) * easing3;
  }
}

//This code does collision detection
function checkDistance(){
  if(dist(px + playerRadius, height - playerRadius, 100, bg1) < (playerRadius + bgRadius) ||
    dist(px + playerRadius, height - playerRadius, 200, bg2) < (playerRadius + bgRadius) ||
    dist(px + playerRadius, height - playerRadius, 300, bg3) < (playerRadius + bgRadius)){
    px *= -1;
  }
}
