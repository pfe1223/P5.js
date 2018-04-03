#Chatbot Project
You will be creating a chatbot that represents somebody from ancient Greece. Your chatbot must do the following things:

* "Talk" in French
* Answer all relevant questions about your person's historical importance
* Must have a message for when it does not understand

##Chatbot Template
* Open the link to the [chatbot template](http://alpha.editor.p5js.org/patrick/sketches/HyVw3I4KG)
* Click the "Sign In" button in the top-right corner
* Type your school email and your password for this site
	* Some of you told your browser to remember your email and password
	* If you do not know your password, click on the link to create a new one
	* Check your school email for the password resent email
* Once logged in, click "File" and then "Duplicate"
* Rename the project with your name and your person

##Brain.txt
* All of your chatbot's intelligence comes from a file called "brain.txt"
* Click on the ">" on the far left of the screen
* Click on "brain.txt"
* All user input will start with a "+"
* All chatbot replies will start with a "-"

###Désolé mais je ne comprends pas...
* We will start with a message when your chatbot does not understand
* Your first line of code should look like this:

~~~
+ *
~~~

* The star means for anything said to your chatbot
* Go to the next line and start with a "-"
* This will start the response your chatbot will give
* Be explicit in your response; tell the user you did not understand and give them a hint about the types of questions they should ask

~~~
+ *
- Désolé mais je ne comprends pas. Pose-moi des questions sur ma vie.
~~~

* Next, you need to start coding the interactions between the user and chatbot
* All of these interactions should come above the "Je ne comprends pas" response
* All input to the chatbot should be coded in lowercase with no punctuation

###Substitutions
* Your chatbot will not understand anything with an `'` in it
* You need to make substitutions for any French expression which uses a `'`
* Substitutions go toward the top of your program:

~~~
//Chatbot's Brain

! version = 2.0

! sub qu'est-ce = que est ce
~~~

* Now, any time you type `Qu'est-ce que` it will be interpreted as `que est ce que`
* So the final question should look like this:

~~~
//Chatbot's Brain

! version = 2.0

! sub qu'est-ce = que est ce

+ que est ce que vous pensez
- Je ne sais pas.
~~~

* You will also need to do substitutions for any French accents; `ê` becomes `e`, etc.

###Creating the Dialogue
* Now you are ready to start with your dialogue
* All interactions with the chatbot should be lowercase and free from punctuation and accents
* Double check your substitutions to make sure you are not forgetting anything
* All responses should be capitalized with proper punction and accents
* Be sure that your chatbot can tell the user __all__ relevant information about your person

##Finishing Touches
* Open the "sketch.js" file
* Find where it says "Titre" and replace the text between the quotation marks with the name of your person
*  Next, you need to add a picture of your person
*  Open a new tab and go to [Google Images](https://images.google.com)
*  Search for a picture of your person
*  Do a two-finger click on the image
*  Select "Copy image address"
*  Go back to the "sketch.js" file
*  Find the variable called "picture"
*  Delete all the text between the quotation marks
*  Paste your information in between the quotation marks
*  Run your program to make sure everything looks good
*  If you image is too big, use the following code:

~~~
img.size(200, 200);
~~~

*  Don't forget to save your work