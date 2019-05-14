// Given string (random phrase or whatever). Return another string with only unique characters.

const {performance} = require('perf_hooks');

const findUniqueChars = (word) =>{
    const arrFromWord = word.split('');
    let uniqueCharacters = [];
    let letterIsUnique;

    arrFromWord.forEach((letter)=>{
        letterIsUnique = true;
        for (let i = 0; i < uniqueCharacters.length; i++) {
            if (letter === uniqueCharacters[i]) {
                letterIsUnique = false;
                break;
            }
        }
        if (letterIsUnique) {
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
