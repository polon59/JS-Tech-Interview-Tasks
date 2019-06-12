// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value,
// except for one element that is left unpaired.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers fulfilling the above conditions, returns
// the value of the unpaired element.

function sortNumbers(array){
    return array.sort((a,b)=>{return a-b})
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (A.length === 1) {
        return A[0];
    }

    sortNumbers(A);

    let currentNumber = null;
    let nextNumber = null;
    let prevNumber = null;

    for (let index = 0; index < A.length; index++) {
        currentNumber = A[index];
        prevNumber = A[index-1];
        nextNumber = A[index +1];

         if (currentNumber !== prevNumber && currentNumber !== nextNumber) {
             return currentNumber;
         }

    }
}




console.log(solution([100,003]));