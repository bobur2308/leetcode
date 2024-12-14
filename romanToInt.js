var romanToInt = function(s) {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let f,l,total;
  total = 0
  for(let i=s.length-1;i>=0; i--){
    f = numbers[s[i]]
    l = numbers[s[i-1]]
    if(f>l){
      total += (f-l)
      i--
    }else{
      total+= f
    }
  }
  return total
};
// romanToInt("MCMXCIV")
// romanToInt("III")
// romanToInt("LVIII")
console.log(romanToInt("MCMXCIV"))  //-> 1994
console.log(romanToInt("III")) // ->3
console.log(romanToInt("LVIII")) // ->58