
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

 //player
 fill(120, 120, 230);
 ellipse(px + playerRadius, height - playerRadius, playerSize, playerSize);
}

function updateGame(){
 updatePlayer();
 updateBadGuys();
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

}
