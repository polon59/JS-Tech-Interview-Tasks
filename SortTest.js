const numbers = [2,6,33,1,45,3,44,345,4445,200];

const sortNumbers = (numbers) =>{
    return numbers.sort((a,b)=>{return a-b})
}

console.log(numbers.toString());
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers.toString());