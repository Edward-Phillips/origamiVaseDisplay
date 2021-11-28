// function that finds the largest prime factor of a given number
function largestPrimeFactor(num: number): number {
  let largestPrime: number = 0;
  let i: number = 2;
  while (i <= num) {
    if (num % i === 0) {
      largestPrime = i;
      num = num / i;
    } else {
      i++;
    }
  }
  return largestPrime;
}


import EulerObject from './EulerObjectInterface';

export const p3:EulerObject = {
  function: `function largestPrimeFactor(num: number): number {
    let largestPrime: number = 0;
    let i: number = 2;
    while (i <= num) {
      if (num % i === 0) {
        largestPrime = i;
        num = num / i;
      } else {
        i++;
      }
    }
    return largestPrime;
  }`,
  comment: `function that finds the largest prime factor of a given number`,
  id: 3,
};
