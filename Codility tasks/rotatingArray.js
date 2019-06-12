// An array A consisting of N integers is given. Rotation of the array means that each element is 
// shifted right by one index, and the last element of the array is moved to the first place. 
// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted
// right by one index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.




function solution(A, K) {
    let shifts = K%A.length;

    if (shifts === 0 || A.length < 2) {
        return A;
    }

    let shiftedElement;

    while (shifts > 0) {
        console.log("Iteration")
        shiftedElement = A.pop();
        A.unshift(shiftedElement);
        shifts --;
    }

    return A;
}

let array = [-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(solution(array, 34))
