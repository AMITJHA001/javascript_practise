function ispalindrome(string){
    let pointer = string.length-1;
    for(let i = 0; i < pointer; i++){
            if(string[i] != string[pointer]){
            return false;
        }
         pointer--;
    }
   
    return true;
}



console.log(ispalindrome("amit"));
console.log(ispalindrome("level"));
console.log(ispalindrome("level")); // true
console.log(ispalindrome("amit"));  // false
console.log(ispalindrome("abba"));  // true
console.log(ispalindrome("abc"));   // false
console.log(ispalindrome("a"));     // true
console.log(ispalindrome(""));      // true