// function takes parameter which is index of number in Fibonacci Sequence,
// and returns value of this number


const calculate = (destIndex) =>{
    if (destIndex === 0) {
        return 0;
    }
    else if(destIndex === 1){
        return 1;
    }
    else{
        let sequence = [0,1];
        for (let currentIndex=2; currentIndex < destIndex+1; currentIndex++) {
            let nextValue = sequence[currentIndex-2] + sequence[currentIndex-1];
            sequence.push(nextValue);
        }
        console.log(sequence)
        return sequence[sequence.length-1];
    }
}
console.log(calculate(340));