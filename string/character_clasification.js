function divideString(string){
  let charString = "";
  let numberString = "";
  let specialCharString = "";
  let lowerCharString = "";
  
  for(let i = 0; i < string.length; i++){
    const char = string[i];
            if(char >= 'A' && char <= 'Z'){
                charString += char;
            }else if(char >= 'a' && char <= 'z'){
              lowerCharString += char;
            }else if(char >= '0' && char <= '9'){
              numberString += char;
            }else{
                specialCharString += char;
            }
  }
  return {
    uppercase:charString,
    lowercase:lowerCharString,
    specialString:specialCharString,
    numberString:numberString,
  }
}

console.log(divideString('AbC123@'));