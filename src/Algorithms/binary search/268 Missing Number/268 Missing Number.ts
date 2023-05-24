/*
Given an array nums containing n distinct numbers in the range [0, n],
 return the only number in the range that is missing from the array.
 
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

*/

function missingNumber(nums: number[]): number {

    let sortedArray = nums.sort(function(a, b) {
        return a - b;
      });//?
    let min = sortedArray[0]//?
    let max = sortedArray[nums.length-1]//?
    let temp = min

    if ((min) === 1){
        return 0
    }  
    else if ((min+1) === max){
        return max+1
    }
    else if(min===max){
        return Math.abs(min-1)
    }

    for (let i = 0 ; i < nums.length; i++) {
        if(sortedArray[i] !== temp){
            return temp
        }
        else{
            temp++
        }
    }

    return max+1

};


function missing(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; //?
    const actualSum = nums.reduce((sum, x) => sum + x); //?
    return expectedSum - actualSum;
}


missing([9,6,4,2,3,5,7,0,1])//?