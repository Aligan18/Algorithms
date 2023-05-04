


let array =   [1,2,3,4,5,6,7,8,9]

let binarySearch =(array, trigger )=>{
        let start =0 
        let end = array.length-1//?.
        let finished = false
        let position = -1
         //?

        if (array[start] > trigger) {return null}
        else if (array[end] < trigger) {return null}

        while(!finished){
                let mid = Math.floor((start+end)/2) //?.
                if (array[mid] === trigger) {
                        finished =true
                        position = mid 
                        return position 
                }

                else if (array[mid] > trigger){
                        end = mid -1 
                }
                else {
                        start = mid +1 
                }
        }
        return position
}

binarySearch(array, 8)//?.
