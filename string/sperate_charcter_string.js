// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.



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
  return [charString, numberString, specialCharString, lowerCharString];
}

console.log(divideString('AbC123@'));