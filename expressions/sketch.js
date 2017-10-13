let coefficient, //this is the multiplier
  operator, //this is the operator
  constant, //this is the constant
  result, //this is the result
  equation, //this is the user input
  button, //button to calculate answer
  answer; //solution to the equation

function setup() {
  noCanvas();

  button = select('#button');
  equation = select('#equation');
  answer = select('#answer');

  button.mousePressed(startSolving);
}

function startSolving() {
  let expr = equation.value();
  let solution = solveProblem(expr);
  writeAnswer(solution);
}

function writeAnswer(solution) {
  answer.html("Answer: " + solution);
}

function solveProblem(expr) {
  operator = getOperator(expr);
  coefficient = getMultiplier(expr);
  result = getResult(expr);
  constant = getConstant(expr);

  if (operator == "+") {
    result = result - constant;
    result = result / coefficient;
  } else {
    result = result + constant;
    result = result / coefficient;
  }

  return result;
}
