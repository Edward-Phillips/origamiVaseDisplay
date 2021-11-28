// function that finds the difference between the sum of the squares of the first n natural numbers and the square of the sum of the first n natural numbers
function sumSquareDifference(n: number): number {
    let sumOfSquares = 0;
    let squareOfSums = 0;
    for (let i = 1; i <= n; i++) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSums += i;
    }
    squareOfSums = Math.pow(squareOfSums, 2);
    return squareOfSums - sumOfSquares;
}

import EulerObject from './EulerObjectInterface';

export const p6:EulerObject = {
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
    id: 6,
};
