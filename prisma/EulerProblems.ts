module.exports = [
  {
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
    number: 1,
  },
  {
    function: `function sumEvenFibonacci(num: number): number {
    let sum: number = 0;
    let fibonacci: number[] = [1, 2];
    while (fibonacci[fibonacci.length - 1] < num) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    for (let i: number = 0; i < fibonacci.length; i++) {
        if (fibonacci[i] % 2 === 0) {
            sum += fibonacci[i];
        }
    }
    return sum;
    }`,
    comment: `function that returns the sum of all even fibonacci numbers below a given number`,
    number: 2,
  },
  {
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
    number: 3,
  },
  {
    function: `export default function largestPalindromeProduct(n) {
      // declare variables
      var largestPalindrome = 0;
      var largestProduct = 0;
      // loop through all numbers of n digits
      for (var i = 10 ** (n - 1); i < 10 ** n; i++) {
          for (var j = 10 ** (n - 1); j < 10 ** n; j++) {
              // if the product of i and j is a palindrome
              if (isPalindrome(i * j) && i * j > largestPalindrome) {
                  // set largest palindrome to product
                  largestPalindrome = i * j;
                  // set largest product to i and j
                  largestProduct = i * j;
              }
          }
      }
      // return largest palindrome product
      return largestProduct;
    }
    
    // function to check if a number is a palindrome
    function isPalindrome(num: number) : boolean {
      // convert the number to a string
      let numStr = num.toString();
      // iterate through the string
      for (let i = 0; i < numStr.length; i++) {
          // check if the first and last characters are the same
          if (numStr[i] !== numStr[numStr.length - 1 - i]) {
              // return false
              return false;
          }
      }
      // return true
      return true;
    }`,
    comment: `a function that returns the largest palindrome product of two numbers of n digits`,
    number: 4,
  },
  {
    function: `smallestMultiple(n: number) : number {
        let i = n;
        while (true) {
            let isDivisible = true;
            for (let j = 1; j <= n; j++) {
                if (i % j !== 0) {
                    isDivisible = false;
                    break;
                }
            }
            if (isDivisible) {
                return i;
            }
            i++;
        }
    }`,
    comment: `function that returns the smallest number that is evenly divisible by all numbers from 1 to n`,
    number: 5,
  },
  {
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
    number: 6,
  },
  {
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
    number: 7,
  }
];