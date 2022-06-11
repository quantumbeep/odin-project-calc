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
    if(b>0){

        return a / b;
    } 
    return 'At the time writing this app in this universe, dividing by 0 is undefined.'
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
    case '+':
      result = add(a, b);
      console.log(`result: ${result}`);
      clearAll();
      document.querySelector('#display').innerHTML = result;
      break;
    case '-':
      result = subtract(a, b);
      console.log(`result: ${result}`);
      clearAll();
      document.querySelector('#display').innerHTML = result;
      break;
    case '*':
      result = multiply(a, b);
      console.log(`result: ${result}`);
      clearAll();
      document.querySelector('#display').innerHTML = result;
      break;
    case '/':
      result = divide(a, b);
      console.log(`result: ${result}`);
      clearAll();
      document.querySelector('#display').innerHTML = result;
      break;
    default:
      break;
  }
};

const handleOp = (id) => {
  op = id
  console.log(`Operator: ${id}`);
  document.querySelector('#display').innerHTML = id;
};

const handleClick = (input) => {
  if (op === '') {
    arrayA.push(input);
    console.log(`array A ${arrayA}`);
    formulate();
    document.querySelector('#display').innerHTML = a;
  } else {
    arrayB.push(input);
    console.log(`array B ${arrayB}`);
    formulate();
    document.querySelector('#display').innerHTML = b;
  }
};
console.log(result);

//if a number was clicked, and no operator was clicked, store it in array A
//if an operator was clicked, store it the operator in a variable\
//if a number was clicked and operator variable contains a value already, then store the number in array B
