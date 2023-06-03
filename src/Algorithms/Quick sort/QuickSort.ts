


const array = [1,6,8,4,2,6,2,9,4,-1,3,-4,76,23,32,]
let count = 0
QuickSort(array)//?
count//?
function QuickSort (array:number[],){
    if (array.length <2 ) {
        return array
    }
    let less:number[] =[]
    let greater:number[] =[]
    let mid = array[0]

    for (let i = 1 ; i < array.length ; i++){
        count++
        if (mid > array[i]){
            less.push(array[i])
        }
        else{
            greater.push(array[i])
        }
        
    }
    return [...QuickSort(less), mid ,...QuickSort(greater) ]
}

