# Setting Up Your Chatbot

## P5 Web Editor
* Got to the P5 Web Editor Page
* If you do not have an account, please create one
	* Use your school email and password
* Click on the link for the `Chatbot Template`
* Click on `File`, then click `Duplicate`
* Rename your chatbot to something more interesting
 
## Prepping the HTML
* Open the `index.html` file on the left
* Scroll down to the `<body>` section
* To make a simple interface, add the following code:

~~~
<h1>Chatbot</h1>

	<p>
		say: <input id="user_input"></input>
		<button id="submit">Submit</button>
	</p>

	<p>
		reply: <span id="output">
	</p>
~~~

* The `<h1>` tag is the title that will appear in your program
* The `<p>` tage makes a paragraph
* The first paragraph writes `say:` and then adds an input box for you to type in
* There is also a submit button
* The second paragraph contains an area that you will write the response
* Start your live server to see if you see anything in your browser

### Make a Parrot Bot
* We are going to test our code by making a bot that parrots (repeats) whatever we type into the `input` box
* Open the `sketch.js` file
* Create a `setup` function, and say `noCanvas()` - we are not going to do any drawing or animations
* We do not need a `draw` function
* In `setup` make a variable `button` and link it to the button in the HTML file
* Make another variable `user_input` and link it to the `input` box in the HTML file
* Make a third variable `output` and link it to the `output` section in the HTML file

~~~
function setup() {
  noCanvas();

  let button = select("#submit");
  let user_input = select("#user_input");
  let output = select("#output");
}
~~~

* Now we want to make this button clickable
* Add the `mousePressed` method to the `button` variable with the callback `chat`
* Then define a function `chat`
* Have this function get the input from the `input` variable
* Then write the information to the `output` variable

~~~
button.mousePressed(chat);

function chat() {
  let input = user_input.value();
  output.html(input);
}
~~~

* Save and run your code, make sure that whatever you type in the `input` box appears in the `reply` area when clicking the `button`

## Making Your Chatbot Smart
* In the files on the left, click on `brain.txt`
* This is the file that controls how your chatbot acts