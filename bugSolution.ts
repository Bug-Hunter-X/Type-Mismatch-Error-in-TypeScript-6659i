function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 10); // Correct: both arguments are numbers

function addAny(a: number, b: number | string): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b; 
  }
}

const result2 = addAny(5, '10'); // Correct, now it handles string
const result3 = addAny(5, 10); // Correct, still handles number
// Type Assertion
const result4 = add(5, parseInt('10' as string)); //Using type assertion to explicitly tell TS that '10' is a number