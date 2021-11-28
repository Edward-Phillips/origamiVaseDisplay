// a function that returns the largest palindrome product of two numbers of n digits
export default function largestPalindromeProduct(n:number) : number {
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
}

import EulerObject from './EulerObjectInterface';

export const p4:EulerObject = {
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
  id: 4,
};
