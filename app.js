let array = [];
let arrayCalc = [];
let op = '';
let numA;
let numB;
let result;
let numToCalc;

const add = () => {
  return arrayCalc.reduce((prev, curr) => prev + curr);
};
const subtract = () => {
  return arrayCalc.reduce((prev, curr) => prev - curr);
};
const multiply = () => {
  return arrayCalc.reduce((prev, curr) => prev * curr);
};
const divide = () => {
  return arrayCalc.reduce((prev, curr) => {
    return curr !== 0
      ? prev / curr
      : {
        'At this time and universe, dividing by 0 is undefined.';
  });
};

//function to clear all
const clearAll = () => {
  array = [];
  arrayCalc = [];
  op = '';
  document.querySelector('#display').innerHTML = '';

  console.log(`operator after AC: ${op}`);
};

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = (op) => {
  arrayCalc[1] = numToCalc;
  console.log(`arrayCalc: ${arrayCalc}`);
  switch (op) {
    case '+':
      result = add();
      console.log(`result: ${result}`);
      clearAll();
      arrayCalc[0] = result;
      console.log(arrayCalc);
      document.querySelector('#display').innerHTML = result;
      break;
    case '-':
      result = subtract();
      console.log(`result: ${result}`);
      clearAll();
      arrayCalc[0] = result;
      console.log(arrayCalc);
      document.querySelector('#display').innerHTML = result;
      break;
    case '*':
      result = multiply();
      console.log(`result: ${result}`);
      clearAll();
      arrayCalc[0] = result;
      console.log(arrayCalc);
      document.querySelector('#display').innerHTML = result;
      break;
    case '/':
      result = divide();
      console.log(`result: ${result}`);
      clearAll();
      arrayCalc[0] = result;
      console.log(arrayCalc);
      document.querySelector('#display').innerHTML = result;
      break;
    default:
      break;
  }
};

const handleOp = (id) => {
  console.log(`Operator: ${id}`);
  document.querySelector('#display').innerHTML = id;
  array = [];
  if (arrayCalc.length === 1 && op) {
    arrayCalc[1] = numToCalc;
    operate(op);
    op = id;
  } else if (arrayCalc.length === 1) {
    op = id;
    arrayCalc[1] = numToCalc;
    console.log(`arrayCalc: ${arrayCalc}`);
    operate(op);
  } else {
    op = id;
    arrayCalc[0] = numToCalc;
    console.log(`arrayCalc: ${arrayCalc}`);
  }
};

const handleNumInput = (input) => {
  if (array.length === 0) {
    array[0] = input;
    document.querySelector('#display').innerHTML = parseInt(array[0]);
  } else {
    array[1] = input;
    array[0] = array.join('');
    document.querySelector('#display').innerHTML = parseInt(array[0]);
  }

  numToCalc = parseInt(array[0]);
  console.log(`array: ${array}`);
  console.log(`numToCalc: ${numToCalc}`);
};

console.log(result);

//if a number was clicked, and no operator was clicked, store it in array A
//if an operator was clicked, store it the operator in a variable\
//if a number was clicked and operator variable contains a value already, then store the number in array B
