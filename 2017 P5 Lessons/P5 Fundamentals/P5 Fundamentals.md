# P5 Fundamentals

## Program Basics
Each program you create will have a similar structure to the one below:

***Insert Basic Program Image***

Enter the code from the above picture into the widget below and click "Play". What happens when you change the numbers in `ellipse`, `background`, or `createCanvas`? 

***Insert Blank Widget***

## Drawing on the Canvas
### Coordinate System
Unlike your math class, the canvas in P5 has the origin point in the top-left corner. As you move to the right, the x-value gets bigger, and as you move down the canvas the y-value gets bigger.

***Insert Canvas Image***

### Colors

Grayscale:

* If a color is represented with one number, then it will be black, white, or some shade of grey
* Numbers can only be from 0 to 255
* 0 means black
* 255 means white
* All other numbers are a shade of grey
* The bigger the number, the darker the color

 
RGB:

* If a color is represented by three numbers, then it will have color - fill(255, 142, 84);
* The first number is red; the bigger it is the redder it will be
* The second number is green; the bigger it is the greener it will be
* The third number is blue; the bigger it is the bluer it will be
* If all three colors are 0 then it is black; if all three are 255 then it is white
* Use [Adobe Color](http://color.adobe.com) to find the RGB values for all sorts of colors

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/uk-77AD7lLs?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
 
RGBA (Transparency):

* This is optional
* If the color is represented by four numbers, then it will have transparency - fill(255, 142, 84, 139);
* The first three numbers are red, green, and blue just as before; the fourth represents transparency
* 0 means completely transparent
* 255 means completely opaque
* Transparency works well when you have overlapping shapes as you mix colors

 
How to Color Lines/Text:

* Use stroke(number); to change the color of lines
* Use fill(number); to change the color of shapes 
* All shapes after a fill statement will be the same color
* All lines after a stroke statement will be the same color
* If you want more than one color, use a different fill/stroke statement before the shape/line

###Lines
To draw a line, you use the `line` command. You must give this command two points on the canvas. The code below will draw a line from point (100, 100) to the point (300, 300):

~~~
line(100, 100, 300, 300);
~~~

To control how thick a line is, use the `strokeWeight` command. The code below will draw a line with a weight of 5:

~~~
strokeWeight(5);
line(100, 100, 300, 300);
~~~

The `stroke` command controls the color of a line. Use a number between 0 and 255 to represent the color. One number means grayscale, three numbers are colors, and four numbers is a color plus transparency. Use [Adobe Color](http://color.adobe.com) to choose your color.

In the widget below color the line red. Then add a second line and color it blue.

***Insert Line Widget***

### Shapes
Two basic shapes are the circle and the rectangle. The command for a circle is `ellipse` and the command for a rectangle is `rect`. Both of these commands take four arguments.

The code below will draw a circle at the x-position 50, the y-position 100, with a width of 20, and a height of 20.

~~~
ellipse(50, 100, 20, 20);
~~~

Similarly, you can substitute the word `ellipse` with `rect` to draw a rectangle. In the widget below draw a circle. Then change it into a rectangle. What difference do you notice?

***Insert Drawing Widget***

By default, shapes have a stroke (exterior line) and a color of white. Like a line, use the `stroke` command to change the color of the stroke. If you do not want a stroke, use the `noStroke();` command. To color a shape, use the `fill` command. The code below will make a red circle with no stroke:

~~~
noStroke();
fill(255, 0, 0);
ellipse(100, 200, 50, 50);
~~~

## Coding Challenge
In the widget below, create a drawing using code that resembles the image below. 

Hint, use the following code to help you draw the mouth:

~~~
arc(x-location, y-location, width, height, 0, PI, PI); 
~~~

__Insert Smiley Image__

__Insert Smiley Widget__