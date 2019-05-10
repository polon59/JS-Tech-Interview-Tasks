// Given string (random phrase or whatever). Return another string with only unique characters.

const findUniqueChars = (word) =>{
    const arrFromWord = word.split('');
    let unique = [];

    arrFromWord.forEach((letter)=>{
        let isLetterInList = false;
        unique.forEach((uniqueChar)=>{
            if (letter === uniqueChar) {
                isLetterInList = true;
            }
        })
        if (!isLetterInList) {
            unique.push(letter);
        }
    })

    return unique;
}

console.log(findUniqueChars("abcdedeaaf"));
