/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */
productExceptSelf([2,3,4,5])//?

function productExceptSelf(nums: number[]): number[] {
    const result = [0]
    let prefix = 1
    let postfix = 1

    for(let i = 0; i < nums.length; i++) {
        nums[i]//? 
        result[i] = prefix //?
        prefix *= nums[i]//? 
    }

    

    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i]
        result[i] *= postfix 
        postfix *= nums[i]
    }

    return result
};




//1            0   prefics 
//1 * 2 = 2    1  
//2 * 3 = 6    2
//6 * 4 = 24   3
//24 * 5 = 120 не записываем 

// 24 * 1 = 24  result 
// 1 * 5  = 5 postfix

// 6 * 5 = 30  result 
// 5 * 4  = 20 postfix

// 2 * 20 = 40 result 
// 20 * 3  = 60 postfix

// 1 * 60 = 60  result 
// 60 * 2  = 120 postfix не записывается 