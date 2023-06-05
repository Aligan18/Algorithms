//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function searchInsert(nums: number[], target: number): number {

    if (nums[0] > target) {return 0}
    if (nums[nums.length] < target) {return nums.length}

    let  start = 0
    let end = nums.length
    let finished = false //?
    let  position = 0
    let cash =-1
    let mid 
    
    while(mid !== cash){
        cash = mid
        mid =  Math.floor((start + end)/2)

        if(nums[mid] === target) {
            finished = true
            position =mid
            return position
        }
        else if(nums[mid] > target) {
            end  = mid
        }
        else if(nums[mid] < target) {
            start  = mid
        }
    }
    return cash +1
};


