function removeDuplicate(numberArray){
    let returnArray = [];
    for(let i = 0; i < numberArray.length; i++){
        let isExits = false;
        for(let j = 0; j < returnArray.length; j++){
            if(numberArray[i] === returnArray[j]){
                isExits = true;
            }
        }

        if(!isExits){
            if(returnArray.length > 0){
                returnArray[returnArray.length] = numberArray[i];
            }else{
                returnArray[0] = numberArray[i];
            }           
        }
    }
    return returnArray;
}

console.log(removeDuplicate([1, 2, 2, 3, 1, 4, 3]));