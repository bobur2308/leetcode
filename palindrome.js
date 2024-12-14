const isPalindrome = function(x) {
  let str = x.toString();  
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]; 
  }

  if(str===newStr){
    return true
  }else{
    return false
  }
}

console.log(isPalindrome(121))
