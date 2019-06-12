// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pairs = 0;
    let eastCount = 0;

    for (const element of A) {
        element === 0 ? eastCount++ : pairs += eastCount;
        if (pairs > 1000000000) {
            return -1;
        }
    }

    return pairs;
}


console.log(solution([0,1,0,1,1]))