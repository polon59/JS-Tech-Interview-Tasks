function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    const array = [];
    let startNumber = 1;
    let index = 0;

    if (N%2 !== 0) {
        array.push(0);
        index = 1;
    }
    for (index; index < N/2; index++) {
        array.push(startNumber);
        array.unshift(-startNumber);
        startNumber ++;
    }

    return array;
}

console.log(solution(15));

