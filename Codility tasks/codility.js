// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const sortNumbers = (numbers) =>{
    return numbers.sort((a,b)=>{return a-b})
}


function solution(A) {
    console.log(A)
    sortNumbers(A);
    let index = A.indexOf(1);

    console.log(A)
    if (index === -1) {
        return 1;
    }

    let number = 1;
    
    for (index; index < A.length; index++) {
        console.log(`number = ${number}; ARR = ${A[index]}`)
        if (A[index]!==A[index-1]) {
            if(A[index] !== number){
                return number
            }
            number ++;
        }
    }

    return number
}

console.log(solution([3,8,56,33,-12,10]));