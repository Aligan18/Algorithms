
const graph = {
    a :['b', 'c'],
    b :['f'],
    c :['d', 'e'],
    d :['f'],
    e :['f'],
    f :['g'],
}

breadthSearch(graph,'a','f')//?

function breadthSearch (graph ,start:string, end:string) {

    let queue:string[] = [];
    queue.push(start);
    while(queue.length > 0){
        const corrent :any  = queue.shift()
        if (!graph[corrent]){
            graph[corrent] =[]
        }

        if(graph[corrent].includes(end)){
            return true
        }
        else{
            queue = queue.concat(graph[corrent])
        }
    }
    return false

}