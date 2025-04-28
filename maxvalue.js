//Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.


const maxValue = (nums) => {
  
    return Math.max(...nums)
  };
  
  module.exports = {
    maxValue,
  };
  

  // or

  const maxValue = (nums) => {
    let max = -Infinity
    console.log(nums)
    for (let i = 0; i <= nums.length; i++){
      if (nums[i] >= max){
        max = nums[i]
      }
    }
    return max
  };
  
  maxValue([4, 7, 2, 8, 10, 9]); // -> 10
  
  
  module.exports = {
    maxValue,
  };
  
  
  