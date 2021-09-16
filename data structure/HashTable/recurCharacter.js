//given an array = [2,5,1,2,3,5,1,2,4];
//should return 2
//[2,1,1,2,3,5,1,2,4] return 1
// [2,3,4,5] return undefined

function recurCharacter(array){
    const a = [];
    if(!array.length){
        return undefined;
    }
    for( let i =0; i< array.length; i++){
        if(!a.includes(array[i])){
            a.push(array[i]);
        }else{
            return array[i];
        }
    }
    return undefined;
}

//create hash table;
function firstRecurringCharacter2(input) {
    const map = {};
    for( let i =0; i<input.length ; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i;
            console.log(map)
        }
    }
    for( let key of map.keys){
        console.log(key)
    }
    return undefined;
}

console.log(recurCharacter([2,3,3,2]))
console.log(firstRecurringCharacter2([2,1,3,4,1,2]))