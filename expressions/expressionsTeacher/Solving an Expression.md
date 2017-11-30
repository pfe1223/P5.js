# Solving an Expression

## Web Interface
Notice, there are three parts to this program, the input box, a button, and an answer. You can enter anything you want into the box and click the button, but nothing happens.

## Given Code

### Variables
Stating at the top of the code, `let` creates three variables `equation`, `button`, and `answer`. These three variables relate back to the program. `equation` is what the user types in the input box, `button` is the button, and `answer` is the answer that appears on the screen.

###Setup Function
If you look at line 5, you will see the `setup` function. We are not making any drawings, so we are not using the canvas. The next three lines of code link the variables above to the visual elements in our program. Finally, when the button is clicked, the function `startSolving` is called.

###startSolving Function
First, we create a variable `expr` that represents the expression the user typed. Next we create a variable `solution` that takes the value of the function `solveProblem`. Last the `writeAnswer` function puts the answer on the webpage.

###solveProblem
This is the part of the program where we get to start coding. This function takes an argument, `expr`. So the user input is passed to this function. Before we start coding, let's think about how we would solve the expression `3x - 5 = 20`. What steps would you take? What if the expression is `3x + 5 = 20`? What are the general steps you would take?

* Identify the following:
	* operator - are we adding or subtracting?
	* coefficient - what are we multiplying x by?
	* constant - what is being added or subtracted to x?
	* result - what does the expression equal?
* Add or subtract the constant to/from the result
* Divide the result by the coefficient

This is the general algorithm to solve the expression. Now let's turn this into code. Let's define the `operator`, `coefficient`, `result`, and `constant`. We are going to set their values with some functions.

~~~javascript
function solveProblem(expr) {
  let = operator = getOperator(expr);
  let = coefficient = getMultiplier(expr);
  let = result = getResult(expr);
  let = constant = getConstant(expr);
}
~~~

Now we need to deterine if the `operator` is addition or subtraction. We do this with an if-statement.

~~~javascript
function solveProblem(expr) {
  let = operator = getOperator(expr);
  let = coefficient = getMultiplier(expr);
  let = result = getResult(expr);
  let = constant = getConstant(expr);
  
  if (operator === '+'){
  
  }
}
~~~

Next, we fill in the actions taken when `operator` is addition.

~~~javascript
function solveProblem(expr) {
  let = operator = getOperator(expr);
  let = coefficient = getMultiplier(expr);
  let = result = getResult(expr);
  let = constant = getConstant(expr);
  
  if (operator === '+'){
    result = result - constant;
    result = result / coefficient;
  }
}
~~~

Time to add the code for when `operator` is subtraction. Instead of adding another if-statement, we are going to use an else statement. This is a more efficient way to code.

~~~javascript
function solveProblem(expr) {
  let = operator = getOperator(expr);
  let = coefficient = getMultiplier(expr);
  let = result = getResult(expr);
  let = constant = getConstant(expr);
  
  if (operator === '+'){
    result = result - constant;
    result = result / coefficient;
  } else {
    result = result + constant;
    result = result / coefficient;
  }
}
~~~

Our last step is to return the new value of the variable `result`.

~~~javascript
function solveProblem(expr) {
  let = operator = getOperator(expr);
  let = coefficient = getMultiplier(expr);
  let = result = getResult(expr);
  let = constant = getConstant(expr);
  
  if (operator === '+'){
    result = result - constant;
    result = result / coefficient;
  } else {
    result = result + constant;
    result = result / coefficient;
  }
  
  return result;
}
~~~

### Time to Test
It is now time to test your code. Start your program and see what happens when you enter an expression. Start with something simple, something you can do in your head.