let arrayA = [];
let arrayB = [];
let op = '';
let a;
let b;

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let result;

//function to clear all
const clearAll = () => {
  arrayA = [];
  arrayB = [];
  op = '';
};

//
const formulate = () => {
  console.log('formulating from arrays');
  a = parseInt(arrayA.join(''));
  b = parseInt(arrayB.join(''));
  console.log(a, b);
};

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = (op) => {
  formulate();
  switch (op) {
    case 'add':
      result = add(a, b);
      console.log(`result: ${result}`);
      clearAll();
      return result;
    case 'subtract':
      result = subtract(a, b);
      console.log(`result: ${result}`);
      clearAll();
      return result;
    case 'multiply':
      result = multiply(a, b);
      console.log(`result: ${result}`);
      clearAll();
      return result;
    case 'divide':
      result = divide(a, b);
      console.log(`result: ${result}`);
      clearAll();
      return result;
    default:
      break;
  }
};

const handleOp = (input) => {
  op = input;
  console.log(`Operator: ${op}`);
};

const handleClick = (input) => {
  if (op === '') {
    arrayA.push(input);
    console.log(`array A ${arrayA}`);
  } else {
    arrayB.push(input);
    console.log(`array B ${arrayB}`);
  }

  document.querySelector('#display').innerHTML = arrayA;
};
console.log(result);

//if a number was clicked, and no operator was clicked, store it in array A
//if an operator was clicked, store it the operator in a variable\
//if a number was clicked and operator variable contains a value already, then store the number in array B
