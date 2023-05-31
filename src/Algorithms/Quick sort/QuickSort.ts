


const array = [1,6,8,4,2,6,9,4,-1,3,-4,76,23,32,]
let count = 0
QuickSort(array)//?
count//?
function QuickSort (array:number[],){
    if (array.length <= 1 ) {
        return array
    }
    let less:number[] =[]
    let greater:number[] =[]
    let midIndex = Math.floor(array.length / 2)
    let mid = array[midIndex]

    for (let i = 0 ; i < array.length ; i++){
        count++
        if (mid > array[i]){
            less.push(array[i])
        }
        if (mid < array[i]){
            greater.push(array[i])
        }
        
    }
    return [...QuickSort(less), mid ,...QuickSort(greater) ]
}

