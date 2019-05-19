const findUnique = (text) =>{

    let word = text.split("");
    let uniqueCharacters = [];
    let charactersCount = [];

    word.forEach(character => {
        let characterCounter = 0;

        word.forEach(nextChar => {
            if (nextChar === character){
                characterCounter ++;
            }
        });

        if (characterCounter === 1) {
            uniqueCharacters.push(character)
        }
        charactersCount.push({name:character,count: characterCounter});
    });

    console.log(charactersCount);
    return uniqueCharacters;
}


console.log(findUnique("abcdeeffggggg"));