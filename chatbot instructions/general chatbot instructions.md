# Setting Up Your Chatbot

## P5 Web Editor
* Got to the [P5 Web Editor Page](https://alpha.editor.p5js.org/)
* If you do not have an account, please create one
	* Use your school email and password
* Click on the link for the [Chatbot Template](http://alpha.editor.p5js.org/patrick/sketches/Hk7f-DnOM)
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

## Make a Parrot Bot
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

## Making Your Chatbot "Smart"
* In the files on the left, click on `brain.txt`
* This is the file that controls how your chatbot acts to input
* The first thing we need to create is a catchall phrase for any input the chatbot doesn't understand
* Use the `+` sign to indicate input from the user
* Use the `-` sign to indicate a response from the chatbot
* We are going to use the `*` wildcard, which means any input
* We also need a message to let the user know the chatbot didn't understand

~~~
+ *
- I'm sorry, I didn't understand. Please check your spelling and try again.
~~~

* Before we can test our bot, we need to load the `brain.txt` file into our program
* In the `setup()` function, add the following lines of code:

~~~
let bot = new RiveScript();
bot.loadFile("brain.rive", brainReady, brainError);
~~~

* Both `brainReady` and `brainError` are functions; `brainReady` gets called if the file loads properly and `brainError` gets called if there is a problem
* We need to define these two functions:

~~~
function brainReady() {
  console.log("Chatbot ready!");
  bot.sortReplies();
}

function brainError() {
  console.log("Chatbot error!");
}
~~~

* The `bot.sorReplies();` must be called before our chatbot can properly work
* We also have to change the `chat` function; we no longer want `output.html` to use the text from the `input` box
* Make your `chat` function look like this:

~~~
let input = user_input.value();
let reply = bot.reply("local-user", input);
output.html(reply);
~~~

* Now run your program and see what happens when you type something in the box
* You should get the same mesage no matter what you type

## Adding Intelligence to Your Bot
* Now that our bot can respond to various input, it is time to add pattern matching to our bot
* Pattern matching is the "intelligence" that our bot uses
* It looks for certain phrases and then offers a response to those phrases
* When typing a pattern (comments with a `+`), do not use any capitalization or punctuation
* All responses should respect grammatical and orthographic rules
* Let's have our bot respond to a simple greeting
* Go to the `brain.txt` file and add the following code before the `*` statement

~~~
+ hello
- Hello.
~~~

* Any time you tell the bot `hello` it will respond in kind
* We know that saying `hi` is the same thing as saying `hello`, so it would make little sense to make another entry for `hi`
* Instead we can tell the computer that any time we see `hi` to treat it as `hello`
* We do this with something called a substitution; add this line of code to the top of your `brain.txt` file

~~~
! sub hi = hello
~~~

* Let's add another pattern for our bot, but we don't want our bot to give the same answer each time

~~~
+ how are you
- Fine, thank you for asking.
- I am doing well, and you?
- I'm doing great! :)
~~~

* By giving multiple responses for the pattern, the computer will randomly choose among them

## Some Advanced Concepts
### Line Breaks
If you want to give a very long reponse but want the response over several lines, you can use the `\n` character to make a new line

~~~
+ tell me a poem
- Little Miss Muffit sat on her tuffet,\n
^ In a nonchalant sort of way.\n
^ With her forcefield around her,\n
^ The Spider, the bounder,\n
^ Is not in the picture today.
~~~

### Weighting
You can set weghting for possible responses. Take a look at the example below:

~~~
+ greetings
- Hi there!{weight=20}
- Hello!{weight=25}
- Yos kyoco duckeb!
~~~

You will notice that the first two responses are weighted. It should be noted that his is not out of 100. If you add 20 for the first response + 25 for the second response + 1 for the third response. That means the weighting is out of 46. So you have a 20/46 chance to get the first response, a 25/46 chance of getting the second response, and a 1/46 chance of getting the third response.

### Open-Ended Triggers
This allows you to use information from the input. Take a look at this code:

~~~
+ my name is *
- Nice to meet you <star>
~~~

When you tell the bot your name (represented by the `*`), the bot will greet you by name (represented by `<star>`).

### Previous Command
Let's say you want to use the previous thing by the user to trigger a certain response. You can do that with the previous command (`%`). Take a look at this code:

~~~
+ what is your favorite color
- My favorite color is blue, what is yours?

+ *
% my favorite color is blue what is yours
- Did you say <star>? That's a pretty color!
~~~

Look closely at the second part. There is a `*` wildcard, but it will only store information if the last thing said by the bot is `my favorite color is blue what is yours`. Notice too there is no capitalization nor is there any punctuation. The `%` tells the computer to match the previous thing said by the bot. This allows you to add context to your chatbot.