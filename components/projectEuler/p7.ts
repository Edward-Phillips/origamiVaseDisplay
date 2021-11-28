// function that returns the nth prime number
function nthPrime(n:number):number {
  let primes = [2];
  let i = 3;
  while (primes.length < n) {
      if (isPrime(i)) {
          primes.push(i);
      }
      i += 2;
  }
  return primes[primes.length - 1];
}

// function that determines if a number is prime

function isPrime(n:number):boolean {
  for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

import EulerObject from './EulerObjectInterface';

export const p7:EulerObject = {
  function: `function sumSquareDifference(n: number): number {
      let sumOfSquares = 0;
      let squareOfSums = 0;
      for (let i = 1; i <= n; i++) {
          sumOfSquares += Math.pow(i, 2);
          squareOfSums += i;
      }
      squareOfSums = Math.pow(squareOfSums, 2);
      return squareOfSums - sumOfSquares;
  }`,
  comment: `function that finds the difference between the sum of the squares of the first n natural numbers and the square of the sum of the first n natural numbers`,
  id: 7,
};