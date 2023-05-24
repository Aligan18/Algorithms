/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
    Ввод: nums = [2,7,11,15], target = 9
    Вывод: [0,1]
    Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
*/


function twoSum(nums: number[], target: number): number[] {
    let answer: number[] = [];

    for (let index in nums) {
        let numIndex = Number(index)//?

        for (let i = numIndex+1; i < nums.length; i++) {

            if (nums[numIndex]+nums[i] === target){
                answer.push(numIndex, i)
                return answer
            }
        }
    }

    return []
};


twoSum([2,7,11,15],9) //?
