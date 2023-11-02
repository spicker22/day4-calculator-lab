
// The operator functions 
function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function mult(num1, num2){
  return num1*num2;
}

function divide(num1, num2){
  return num1/num2;
}

function power(num1, num2){
  return num1**num2;
}

function mod(num1, num2){
  return num1%num2;
}

function sqrt(num1){
  return Math.sqrt(num1);
}







// The Calculator function
function calculate(expression) {
  
  const tokens = expression.split(' ');

  let num1;
  let operator;
  let num2;


  if (tokens.length === 3) {
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert('You have inputted an invalid number, try again!');
      return;
    }
   } else if (tokens.length === 2) {
      operator = tokens[0];
      num1 = Number(tokens[1]);
      if (Number.isNaN(num1)) {
        alert('You have inputted an invalid number, try again!');
        return;
      }
     } else {
      alert('You have inputted an invalid expression!');
      return;
      }


  if (operator === '+' ) {
    return add(num1, num2);
  } 

  if (operator === '-' ) {
    return subtract(num1, num2);
  } 

  if (operator === '*' ) {
    return mult(num1, num2);
  } 

  if (operator === '/' ) {
    return divide(num1, num2);
  } 
  
  if (operator === '^' ) {
    return power(num1, num2);
  } 
  
  if (operator === '%' ) {
    return mod(num1, num2);
  } 

  if (operator === 'sqrt' ) {
    return sqrt(num1);
  } 

  alert('Unrecognized operator!');

}






/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
