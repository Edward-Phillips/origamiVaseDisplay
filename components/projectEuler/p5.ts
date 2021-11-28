// function that returns the smallest number that is evenly divisible by all numbers from 1 to n
function smallestMultiple(n: number) : number {
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
}

import EulerObject from './EulerObjectInterface';

export const p5:EulerObject = {
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
    id: 5,
};
