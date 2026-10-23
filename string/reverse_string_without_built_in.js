function reverseString(string){
    let reserveString = "";
    for(let i = string.length-1; i >=  0; i--){
        const char = string[i];
         reserveString += char;
    }

    return reserveString;
}



console.log(reverseString("amit"));