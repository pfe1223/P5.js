#Nested Loops

A single for loop can draw a row or a column of a shape. If you want a grid of shapes, you will need to use a nested loop. You will also get a quick introduction to the `random` command. Watch the video below and follow along with the code widget.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/1c1_TMdf8b8?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

<script type="text/p5" data-preview-width="500">
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);
	
	for (var x = 0; x <= width; x += 50) {
		fill(255, 0, 200);
		ellipse(x, 200, 25, 25);
	}
}

</script>

##Coding Challenge

<img src="nestedPattern.png" alt="Nested Pattern">

Create a grid pattern of circles as done in the video. Color the circles with the rainbow pattern in the image above.

<script type="text/p5" data-preview-width="500">





</script>