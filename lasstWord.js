var lengthOfLastWord = function(s) {
  return s.trim().split(/\s+/).pop().length;
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));