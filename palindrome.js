const isPalindrome = (word) =>{
    let wordLength = word.length;
    let frontIndex = wordLength;
    let backIndex = 0;
    let isPalindrome = true;

    while (frontIndex > 0) {
        if (word[frontIndex] !== word[backIndex]){
            isPalindrome = false;
            break;
        }
        frontIndex ++;
        backIndex --;
    }

    return isPalindrome;
}

