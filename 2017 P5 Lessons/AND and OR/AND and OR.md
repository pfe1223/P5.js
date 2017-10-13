#AND and OR Statements

The video is a continuation of the discussion on conditional statements. You are going to learn how to use the "and" and "or" operators. The video has two examples. There two code widgets below so you can follow along.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/r2S7j54I68c?start=589" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

<script type="text/p5" data-preview-width="500">

//Use the && (AND) operator in an if statement

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
	stroke(255);
	strokeWeight(4);
	noFill();
	
	if (mouseX > 300){
		
	} 
	
	rect(300, 200, 100, 100);

}
</script>

The code widget below if for the second example in the above video.

<script type="text/p5" data-preview-width="500">

//Use the || (OR) operator in an if statement

var x;
var speed;

function setup() { 
  createCanvas(400, 400);
  x = 0;
  speed = 3;
} 

function draw() { 
  background(255);
	stroke(255);
	strokeWeight(4);
	noFill();
	
	ellipse(x, 200, 100, 100);
	if (x > width) {
		speed = -3;
	}
	x = x + speed;

}
</script>

##Coding Challenge

<img src="bouncingBall.gif" alt="Bouncing Ball">

Take your bouncing ball code and paste it into the code widget below. Modify the code such that the bouncing ball moves left to right and top to bottom. In addition, make sure the ball bounces when the edge of ball hits the edge of the canvas.

<script type="text/p5" data-preview-width="500">





</script>
