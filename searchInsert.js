var searchInsert = function(nums, target) {
  let s = 0;
  for(let i = 0; i<=nums.length-1;i++){
    if(nums[i]===target){
      s++
      return i
    }
  }
  if(s===0){
    for(let i = 0; i<=nums.length-1;i++){
      if(nums[i]>target){
        s++
        return i
      }
    }
  }
  if(s===0){
    return nums.length
  }
};
console.log(searchInsert([1,3,5,6],7));
// searchInsert([1,3,5,6],5)