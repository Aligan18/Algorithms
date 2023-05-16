/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated 
at an unknown pivot index k (1 <= k < nums.length) such that the resulting 
array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. 
*/

function search(nums: number[], target: number): number {

    //find the index of the minimum value 
    let  min = Infinity
    let offset: number=-1
    for (let index in nums) {
        let numIndex = Number(index)
        if(min > nums[numIndex]){ 
            min = nums[numIndex]
            offset = numIndex 
        }
    }
    offset//?

    //Start searching for a target 
    let start = 0 
    let end = nums.length-1

    while(start < end) {
        //Calculate the middle of the array with an offset 
        let mid = Math.floor((start+end)/2) //?
        let midWithOffset = mid - offset
        if( Math.sign(midWithOffset) === -1) {
            midWithOffset = nums.length - Math.abs(midWithOffset)
        }

        //Comparing the middle of the array with the target
        if(nums[midWithOffset]=== target){
            return midWithOffset
        }
        else if (nums[midWithOffset] < target){
            start = mid +1 //?
        }
        else if (nums[midWithOffset] > target) {
            end = mid  //?
        }
    }
    return -1

};


 
search([5,1,3], 1)//?

