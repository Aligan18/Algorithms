const unsortedArray = [9,5,7,1,6,2,7,3,5,6,7,48,56,54]


const selectionSort =(array:number[]):number[] =>{
    let count= 0
    for(let i = 0; i < array.length; i++){
        let minIndex = i 
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[minIndex] ){
                minIndex = j //? 
            }
            count += 1
        }
        
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp

    }
    console.log(array.length) // O(n*n)
    console.log(count) 
    return array
}

selectionSort(unsortedArray) //?

