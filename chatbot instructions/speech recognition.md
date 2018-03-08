# Speech Recogition

Speech recognition uses the same `P5 Speech` library as the previous lesson in which you learned how to make the computer talk. Just like before, you will want to open the [speech recognition template](http://alpha.editor.p5js.org/patrick/sketches/HkIuuyAdz), duplicate it, and then rename it.

## A Note About Privacy
Speech recognition requires the use of your microphone. Your browser will ask you to turn on the microphone before your program will be able to work. This, in and of itself, isn't much of a privacy concern. However, all of the processing of your speech is done by Google on their cloud. Just keep in mind that another company, potentially, has access to all of these voice recordings. I would caution you from leaving your program from running all of the time. There are certain times when what you say should remain private.

## Setting Up Our Program
We will not be using a `draw` function, so go ahead and create a `setup` function. Use the `noCanvas();` command since we won't be drawing anything to the canvas. We also want a `speechRec` variable that is linked to the `P5 Speech` library. By default, the microphone will listen one time and then stop. We want the microphone to listen as long as the program is running, so we need the variables `continuous` and `interim`, which will be set to `true` and `false` respectively. We also want the computer to write what we say to the screen, so we are going to call the `gotSpeech` function. Lastly, the microphone needs to be turned on.

~~~
function setup() {
  noCanvas();
  
  let speechRec = new p5.SpeechRec();
  speechRec.continuous = true;
  speechRec.interimResults = false;
  speechRec.onResult = gotSpeech;
  speechRec.start();
}
~~~

Since the function `gotSpeech` is invoked every time the microphone collects audio input, we need to define this function.

~~~
function gotSpeech(){

}
~~~

When the computer sends the audio to Google to be processed, Google has something called the `resultValue`. This either `true` which means Google understood the audio, or `false` which means Google did not understand the audio. Remember, Google is giving its best guess; they may think that they understand the audio, but, in fact, make a mistake in their recognition. We only want to write those words to the screen if Google feels confident that it understands the audio. 

~~~
function gotSpeech(){
  if (speechRec.resultValue) {
    createP(speechRec.resultString);
  }
}
~~~

The `createP` makes a new paragraph, and the `resultString` is what Google thinks the audio clip should be. If done well, the computer will write what it hears to the screen. Do note that you may have to slow down, speak up, and ennunciate your words carefully. You also need to have a short pause for the computer to send the audio to Google.