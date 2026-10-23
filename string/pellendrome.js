function ispalindrome(string){
    let reverseSttring = "";
    for(let i = string.length-1; i >= 0; i--){
        let char = string[i];
        reverseSttring += char;
    }
    
    if(reverseSttring != string){
        return false;
    }else{
        return true;
    }

}



console.log(ispalindrome("amit"));
console.log(ispalindrome("level"));