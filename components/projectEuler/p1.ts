import EulerObject from './EulerObjectInterface';

// function that returns the sum of all multiples of 3 or 5 below the given number
function sumOfMultiples(number: number): number {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}


// now I need to convert the above function into a string stored inside an object under the key 'function' with the comment above it stored under the key 'comment'

export const p1:EulerObject = {
  function: `function sumOfMultiples(number: number): number {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }`,
  comment: `function that returns the sum of all multiples of 3 or 5 below the given number`,
  id: 1,
};
