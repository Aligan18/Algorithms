//Given an integer array nums, find the  subarray with the largest sum, and return its sum.
/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) //?

function maxSubArray(nums: number[]): number {
    let maxSub = nums[0]; //?
    let curSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if(curSum < 0) {
        curSum = 0;
      }
    
      curSum += nums[i]; 
     
      if (maxSub < curSum){
        maxSub = curSum
      } 
    }
  
    return maxSub;
  }