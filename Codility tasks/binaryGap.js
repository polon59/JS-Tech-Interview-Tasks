function convertToBinary(dec){
    return (dec >>> 0).toString(2);
}


function sortArray(array){
    return array.sort((a,b)=>{return a-b})
}

function solution(N) {
    const binaryN = convertToBinary(N);
    let gapCounter = 0;
    const gaps = [];

    console.log(binaryN)
    for (let index = 0; index < binaryN.length; index++) {
        if (binaryN[index] == 0) {
            gapCounter ++;
        }
        else{
            gaps.push((gapCounter));
            gapCounter = 0;
        }
    }


    return sortArray(gaps)[gaps.length-1];
}


console.log(solution(32));
