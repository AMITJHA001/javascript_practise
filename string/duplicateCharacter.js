function iterationCount(string){
    const frequency  = {};
    const duplicate = [];
    for(let i= 0; i < string.length; i++){
    const char = string[i];
        if(frequency[char]){
            frequency[char] = frequency[char] + 1;
            if(frequency[char] == 2){
              duplicate[duplicate.length] = char;
            }
        }else{
            frequency[char] = 1;
        }
    }

    return duplicate;
}


console.log(iterationCount("banana"));