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
* Run the program to see if you see anything in your browser

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
* This is the file that controls how your chatbot reacts to input
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
bot.loadFile("brain.txt", brainReady, brainError);
~~~

* Both `brainReady` and `brainError` are functions; `brainReady` gets called if the file loads properly and `brainError` gets called if there is a problem
* We need to define these two functions, and they should be defined inside the `setup` function:

~~~
function brainReady() {
  console.log("Chatbot ready!");
  bot.sortReplies();
}

function brainError() {
  console.log("Chatbot error!");
}
~~~

* The `bot.sortReplies();` must be called before our chatbot can properly work
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

* By giving multiple responses for the pattern, the computer will randomly choose among them.

## Some Advanced Concepts
You can see all of the features of the RiveScript library on their [documentation page](https://www.rivescript.com/docs/tutorial).

### Line Breaks - Input
If you want to give a very long reponse but don't want the response to go "behind" the output part of the browser window, then use need to use the conventions below:

~~~
+ tell me a poem
- Little Miss Muffit sat on her tuffet,\n
^ In a nonchalant sort of way.\n
^ With her forcefield around her,\n
^ The Spider, the bounder,\n
^ Is not in the picture today.
~~~

### Line Breaks - Output
If you want the text to appear on the screen with line breaks, you will need to replace the `\n` for a `<br>`.

~~~
+ tell me a poem
- Little Miss Muffit sat on her tuffet,<br>
^ In a nonchalant sort of way.<br>
^ With her forcefield around her,<br>
^ The Spider, the bounder,<br>
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

### Adding an Image
This is not a part of RiveScript, this is just something done with HTML. Open your `index.html` file. Open a new tab and find a picture you want for your chatbot. Once you have a picture, do a two-finger click and select `Copy image address`. Go back to your HTML file. Under the `<h1>` tag with your title, add a line of code that looks like:

~~~
<img src="http://link-to-your-image.com">
~~~

If your picture is too big, you can change it by altering the CSS (covered in the next section) or you can set the size in the HTML.

~~~
<img src="http://link-to-your-image.com" width="200" height="150">
~~~

### Variables and Conditionals
This is probably the most advanced section of this document. RiveScript, like JavaScript, can create a variable and store a value in it. In the code below, I am going to show you how to tell the chatbot your name, have the chatbot remember the name, and then recall your name later on. First, telling the chatbot your name:

~~~
+ my name is *
- Well, it is nice to meet you, <star>!
~~~

So, this will recall your name, but the chatbot won't remember your name. If your code were to look like the code below, you will see a problem. 

~~~
+ my name is *
- Well, it is nice to meet you, <star>!

+ hey what is my name
- Your name is <star> of course.
~~~

The chatbot will think your name is `undefined`. `<star>` will only temporarily remember something. You will need to use a variable to permanently remember something. Take a look at the code below:

~~~
+ my name is *
- <set name=<star>> Well, it is nice to meet you, <get name>!

+ hey what is my name
- Your name is <get name> of course.
~~~

`<set name=<star>>` creates a variable called `name` and sets its value to the `*`, which is whatever the user typed. If you were to run this, you would notice that the chatbot will reply with your name in lowercase. This is true even if you type your name with a capital letter. To keep the capitalization, change the code to look like this:

~~~
+ my name is *
- <set name=<formal>> Well, it is nice to meet you, <get name>!

+ hey what is my name
- Your name is <get name> of course.
~~~

`<formal>` does the same thing as `<star>` with the addition of capitalizing the word. So, to create a variable use `<set variable=<star>>` and to recall that variable use `<get variable>`. 

If you want to base the chatbot's reaction on the value of a variable, then you will have to use something called a conditional statement. The following example will show how to ask the chatbot their name. If they share the same name as the user, then you will get one response. If the names are different, then you will get a different response.

~~~
+ what is your name
* <get name> == James => Hey we have the same name, James!
- My name is James, which is different from yours.
~~~

The `*`, in this case, means "if", then we have a test that equates to true or false. The `=>` means "then". So, that line would read, "if `name` is equal to James then give the following respons". The second line will only run if the conditional is false. You can have multiple conditionals if you want. They will be evaluated from top to bottom.

## Modifying the CSS (making things look pretty)
CSS controls what your HTML code looks like. If you want to change the size, color, the font, or any other attribute, you will most likely need to change your CSS file. Click on the `style.css` file.

### Standard CSS Attributes
Your standard CSS file should look like this:

~~~
html, body {
  margin: 0;
  padding: 0;
}
~~~

This means that anything that appears inside the `html` or `body` tags has attributes for `margin` and `padding`. Both of those attributes are set to zero, so you don't see any changes. The `margin` and `padding` control spacing within an element and between elements. To change how your chatbot looks, you need to add an attribute to the list, and then give a value for that attribute. Here is some more information on [CSS](https://www.w3schools.com/css/default.asp).

If you wnated to make your chatbot have a black background and white text, your CSS file would look something like this:

~~~
html, body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
}
~~~

### Modifying by ID
If you place attributes into the `html` and `body` section of the CSS file, you will change the entire chatbot. But, what if you wanted to only alter the text said by the chatbot? If you look at your `HTML` code, you will notice that anything the chatbot says is put into the `<span>` element with the ID `output`. You can use the element IDs to narrow your changes to only certain parts of your chatbot. Take a look at this CSS code:

~~~
html, body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
}

#output {
  color: red;
  font-size: 24px;
}
~~~

You will notice that the second entry in this file has a `#` in front of it. This tells the computer to look for the element with the ID `output` and make the changes to only the text in this element. So any text said by the chatbot should be red and have the size of 24 pixels.

### Google Fonts
Google makes a large collection of fonts freely available to anybody who wants to use them. Basically, if there is a font in a Google Doc that you like, then you can import it to your chatbot. Visit the [Google Fonts](https://fonts.google.com/) website to see all of the available fonts. 

Click on the name of the font you like. If you want to add more than one font, click on more fonts. A black bar will appear at the bottom of the screen with the number of fonts that you have selected. Keep in mind, the more fonts you select, the longer it will take for your chatbot to load.

* When you are ready to add the fonts to your chatbot, click on the black bar at the bottom of the screen. 
* You will see some `HTML` code that looks like `<link href='https://...`; copy this link.
* Go to your `index.html` document and past the code into the `<head>` section (it doesn't matter where).
* Go back to the Google Fonts page.
* You will see a section called `Specify in CSS`; copy the font family that you want and make sure you paste it into the appropriate place in your `style.css` document.