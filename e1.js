// function aaa(index) return value

const calculate = (destIndex) =>{
    let number;
    
    if (destIndex === 0) {
        return 0;
    }
    else if(destIndex === 1){
        return 1;
    }
    else{
        let numbers = [0,1];
        for (let i=2; i < destIndex+1; i++) {
            let nextValue = numbers[i-2] + numbers[i-1];
            numbers.push(nextValue);
        }
        console.log(numbers)
        return numbers[numbers.length-1];
    }
}
console.log(calculate(5));