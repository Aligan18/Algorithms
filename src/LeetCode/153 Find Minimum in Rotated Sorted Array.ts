// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

const array = [1,2]
findMin(array)//?


function findMin(nums: number[]): number {
    let start = 0
    let end = nums.length-1 

    while(true) {
        end//?
        start//?
        let mid = Math.floor((start + end)/2)//?
       
        if (nums[mid] >= nums[start] && nums[mid] <= nums[end] ){
            return nums[start] 
        }
       
        else if (nums[mid] >= nums[start] && nums[mid] > nums[end]){
                start = mid+1 //?
        }
        else if (nums[mid] < nums[start] && nums[mid] <= nums[end]){
                end = mid  //?
        }
        
    }
};