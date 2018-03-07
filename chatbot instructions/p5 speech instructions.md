# Using the P5 Speech Library

## P5 Speech Template
`P5 Speech` is a library that works with JavaScript. As such, you cannot just use the P5 Web Editor and expect the Speech features to work. You need a copy of the library in the project folder and you need to link to the library in the `index.html` file. All of this is already done if you use the template below:

* Open the [P5 Speech Template](https://alpha.editor.p5js.org/patrick/sketches/S1wEYapdz)
* Make sure that you are signed in on the P5 Web Editor page
* Duplicate the template
* Rename it
* You are now ready to start using the `P5 Speech` library

## Making Your Computer Talk
Getting your computer to say one thing is rather straightforward. The first thing you are going to do is create a variable called `speech`. Then you are going to create a `setup` function.

~~~
let speech;

function setup() {

}
~~~

In the `setup` function, you are going to link the `speech` variable to the `P5 Speech` library. Then use the `.speak` method with some text to make your computer speak.

~~~
let speech;

function setup() {
  speech = new p5.Speech();
  speech.speak("Hello World");
}
~~~

Click the button to run your program. You should hear a voice say whatever words are in between the quotation marks.

## Click to Talk
We now want our computer to speak every time we click the mouse. Outside of the `setup` function, create a function called `mousePressed`. Cut the line of code with the `.speak` method and paste it into the `mousePressed` function.

~~~
function mousePressed() {
  speech.speak("Hello World");
}
~~~

Run the program. Nothing should happen until you click the mouse.

## Changing the Voice
You can change the voice used by the `P5 speech` library. To do this, use the `.setVoice` method before the line of code that makes the computer talk. Each "voice" is named after a person. Set the voice to `Alice` and run your program.

~~~
function mousePressed() {
  speech.setVoice("Alice");
  speech.speak("Hello World");
}
~~~

If you want a list of all of the voices available, we need to make some changes to our code. First, we need to use something called a `callback`. Go back up to the `setup` function and add the following code:

~~~
function setup() {
  speech = new p5.Speech();
  speech.onLoad = voiceReady;
}
~~~

`voiceReady` is a function that we have to define, so let's do that. We can define this function within `setup`; it won't make a difference.

~~~
function setup() {
  speech = new p5.Speech();
  speech.onLoad = voiceReady;
  
  function voiceReady() {
    console.log("Voices ready");
    speech.listVoices();
  }
}
~~~

When you run your program, look down in the grey box at the bottom of the screen. This is your console. You should see a message that the voices are ready. You should also see a list of about 80 different voices you can use. To set a voice, alter the name in the quotation marks.

## Random Voices
We can alter our program such that it will choose a random voice every time you click the mouse. Go down to the `mousePressed` function and create a variable called `voices` that will be all of the possible voices. Make another variable called `voice` that will select one of the voices at random. To know which voice is being used, console log the current voice.

~~~
function mousePressed() {
  let voices = speec.voices;
  let voice = random(voices);
  console.log(voice);
  speech.setVoice(voice);
  speech.speak("Hello World");
}
~~~

Now every time you click the mouse, the computer will use a different voice, and that voice will be written to the console.

## Altering the Voice
The `P5 Speech` library gives us the ability to change the pitch (how low or high), the rate (how fast or slow), and the volume. Since we can adjust the volume on your laptops, I am not going to cover the `.setVolume` method.

### Rate of Speech
The default pitch is 1. To slow down the rate of speech set the `rate` to a number closer to zero. To speed up the rate of speech, choose a number closer to 2.

~~~
function mousePressed() {
  let voices = speec.voices;
  let voice = random(voices);
  console.log(voice);
  speech.setVoice(voice);
  speech.setRate(1.7);
  speech.speak("Hello World");
}
~~~

### Pitch
Like `rate`, the default `pitch` is 1. To make the voice sound higher, set the `pitch` to a number closer to 2. Choosing a smaller number will make the voice lower.

~~~
function mousePressed() {
  let voices = speec.voices;
  let voice = random(voices);
  console.log(voice);
  speech.setVoice(voice);
  speech.setRate(1.7);
  speech.setPitch(0.3);
  speech.speak("Hello World");
}
~~~