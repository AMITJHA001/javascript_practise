function reverseString(string){
    let reserveString = "";
    let pointer = string.length-1;
    for(let i = 0; i <= string.length-1; i++){
         const char = string[pointer];
         reserveString += char;
         pointer--;
    }

    return reserveString;
}



console.log(reverseString("amit"));