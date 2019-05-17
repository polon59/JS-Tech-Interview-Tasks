const isPalindrome = (word) =>{
    let wordLength = word.length;
    let backIndex = wordLength-1;
    let frontIndex = 0;
    let isPalindrome = true;

    while (backIndex > 0) {
        console.log(`front=${frontIndex}, back=${backIndex} /// ${word[frontIndex]} === ${word[backIndex]}`)        
        if (word[frontIndex] !== word[backIndex]){
            isPalindrome = false;
            break;
        }
        frontIndex ++;
        backIndex --;
    }

    return isPalindrome;
}

const word = "aabbcbbaa";
isPalindrome(word) ? console.log("YES") : console.log("NO");