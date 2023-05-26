//Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/*
Input: nums = [1,2,3,1]
Output: true
*/

const nums = [4,1,2,3,1]
function containsDuplicate(nums: number[]): boolean {
    
    // selected sort 
   
    for(let i = 0; i < nums.length; i++){
        let minIndex = i 
        for (let comparison = minIndex+1; comparison < nums.length; comparison++) {
            if(nums[minIndex] > nums[comparison]){
                minIndex = comparison
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    nums //?
    
    //find duplicate value

    for(let i  in nums){
        let index =Number(i)
        nums[index]//?
        if(nums[index] === nums[index+1]){
            return true
        }
    }

    return false
};

containsDuplicate(nums) //?  


function containsDuplicateLeetCode(nums: number[]): boolean {
    const noDup = new Set(nums) //?
    if (noDup.size === nums.length) {
        return false
    }
    return true
};

containsDuplicateLeetCode(nums) //?