// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent
//  consecutive cars on a road. Array A contains only 0s and/or 1s:
// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing
// when P is traveling to the east and Q is traveling to the west.
// Write a function:
// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.
// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let pairs = 0;
//     let eastCount = 0;

//     for (const element of A) {
//         element === 0 ? eastCount++ : pairs += eastCount;
//         if (pairs > 1000000000) {
//             return -1;
//         }
//     }

//     return pairs;
// }


// console.log(solution([0,1,0,1,1]))



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A.sort((a,b)=>{return a-b});
    let index = A.indexOf(1);
    let smallestPositive = 1;

    if (index === -1 || A.length < 1) {
        return smallestPositive;
    }

    let currentNumber;

    for (index; index < A.length; index++) {
        currentNumber = A[index];
        console.log(`current: ${currentNumber} , smallest Pos: ${smallestPositive}`)
        if (currentNumber !== A[index-1]) {
            if (currentNumber > smallestPositive){
                return smallestPositive;
            }
            smallestPositive ++;
        }
    }
    return smallestPositive;
}


console.log(solution([-3,-4,-5,-6,-443,-3]))