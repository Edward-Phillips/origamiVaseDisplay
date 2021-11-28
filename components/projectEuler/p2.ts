import EulerObject from './EulerObjectInterface';

// function that returns the sum of all even fibonacci numbers below a given number
function sumEvenFibonacci(num: number): number {
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
}


export const p2:EulerObject = {
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
    id: 2,
};