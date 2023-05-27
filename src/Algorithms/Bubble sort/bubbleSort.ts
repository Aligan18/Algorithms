const array = [3,7,8,4,10,15,9,8,59,0,63]

bubbleSort(array) //?


function bubbleSort(array){
    let temp 
    let count =0 
    for (let i = 0 ; i < array.length ; i++)  {

        for (let j = 0 ; j < array.length ; j++)  {
            if (array[j] < array[j+1]) {
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
         count++
        }
      }
    array.length //? 
    count //? 
    // O(n*n)
    return array
}