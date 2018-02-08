## Making a Number Guessig Chatbot

### Setting up Atom
* If this is your first time coding, download Atom from `Self-Service`
* We are going to use something called Rivescript for the chatbot
* In the far left column, do a two-finger click (or control+click) and select `New File`
* Call this file `brain.rive`, this will contain all of the chatbot "intelligence"
* Open preferences by pressing `Command + ,` or selecting `Atom` and then `Preferences`
* Click on `Install`
* Search for `language-rivescript`, this will do syntax highlighting for your Rivescript file
* Again, if this is your first time, add the packages `atom-live-server` and `atom-beautify`
* __Note: the Rivescript library should already be downloaded and linked__ 

### Prepping the HTML
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

### Make a Bot That Replies - JavaScript
* Now go to the `sketch.js` file so we can modify the JavaScript code
* Let's make a RiveScript bot called `bot` and then load our `brain.rive` file
* We need to now define the two callbacks: `brainReady` and `brainError`
* Start with `brainReady` and log a successful message
* Then you have to add `bot.sortReplies()`
* We want the computer to choose a random number (use `floor` so we get an integer)
* Now log that number to the console so we can see what the right answer is
* The last part of this function is to pass the random number to `brain.rive`

~~~
let bot = new RiveScript();
bot.loadFile("brain.rive", brainReady, brainError);

function brainReady() {
  console.log("Chatbot ready!");
  bot.sortReplies();
  let num = floor(random(100000));
  console.log(num);
  let reply = bot.reply("local-user", "set " + num);
}
~~~

* Next let's make the `brainError` function
* Simply console log `Chatbot Error!`

~~~
function brainError() {
  console.log("Chatbot error!");
}
~~~

### Make a Bot That Responds - RiveScript
* Open the `brain.rive` file
* We are going to start with a comment that explains what the file is: `// Chatbot brain`
* First thing we are going to do is create a variable with the random that was created in our `sketch.js` file
* We start this with a `+`, which represents information passed to the chatbot
* We sent the chatbot the word `set` and the random number
* `set` is a keyword that tells the computer what the answer is
* So we need to tell `brain.rive` to look for the word `set` and a number
* We do this with `+ set #`
* Next we want to create a variable called `num` and have its value be the random number
* We do that with this command `- <set num=<star>>`
* Now that we have our answer, we want to be able to respond to user guesses
* We will do that with a conditional
* The word `<star>` represents whatever the user typed
* If the guess is too big, we want the user to pick a smaller number: `* <start> > <get num> => pick a lower number`
* If the guess is too low, we want the user to pick a bigger number: `* <start> < <get num> => pick a higher number`
* If the guess is correct, we want to send the user a message: `* <start> == <get num> => you got it!`
* Finally, we want to make a "catch all" for any input that is not a number
* The `*` is a wildcard that means any text that does not meet the criteria from the above code
* When we get "incorrect" input, we need to tell the user to guess a number

~~~
//Chatbot's Brain

+ set #
- <set num=<star>>

+ #
* <star> > <get num> => pick a lower number
* <star> < <get num> => pick a higher number
* <star> == <get num> => you got it!

+ *
- Guess a number between 0 and 99999
~~~

### Test Your Program
* Go ahead a test your program
* Remember, open the JavaScript console to see the answer
* This way you can test answers that are too small, too big, and correct
* Don't forget to type input that is not a number to see what happens

## Make Your Own Chatbot
I now want you to make your own chatbot that responds to input. It is not going to guess a number. You can make your chatbot do whatever you want. The only rule is that your chatbot must say things that appropriate for school.

### RiveScript Commands
Here are some more commands that will be useful for making your chatbot:

