function iterationCount(string){
    let frequency  = {};
    
    for(let i= 0; i < string.length; i++){
    const char = string[i];
        if(frequency[char]){
            frequency[char] = frequency[char] + 1;
        }else{
            frequency[char] = 1;
        }
    }

    return frequency;
}


console.log(iterationCount("banana"));