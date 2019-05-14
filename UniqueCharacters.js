// Given string (random phrase or whatever). Return another string with only unique characters.

const {performance} = require('perf_hooks');

const findUniqueChars = (word) =>{
    const arrFromWord = word.split('');
    let uniqueCharacters = [];
    arrFromWord.forEach((letter)=>{
        let isLetterInList = false;
        uniqueCharacters.forEach((uniqueChar)=>{
            if (letter === uniqueChar) {
                isLetterInList = true;
            }
        })
        if (!isLetterInList) {
            uniqueCharacters.push(letter);
        }
    })
    return uniqueCharacters;
}


const startTime = performance.now();
const result = findUniqueChars("piniendzy ni ma bo jest zima");
const stopTime = performance.now();
console.log(result);
console.log(`Call to function 'findUniqueChars' took ${stopTime-startTime} milliseconds.`);
