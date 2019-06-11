const findUnique = (text) =>{

    let word = text.split("");
    let uniqueCharacters = [];
    let characterCounter;

    word.forEach(character => {
        characterCounter = 0;

        word.forEach(nextChar => {
            if (nextChar === character){
                characterCounter ++;
            }
        });

        if (characterCounter === 1) {
            uniqueCharacters.push(character)
        }
    });

    return uniqueCharacters;
}


console.log(findUnique("abcdeeffggggg"));