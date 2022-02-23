function countLtter([string, letter]) {
    let count = 0;

    for(let char of string){
        if(char == letter){
            count++;
        }
    }

    return count;
}

console.log(countLtter(['abcddd', 'd']));
