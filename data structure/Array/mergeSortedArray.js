//mergeSortedArrays([0,3,4,31],[4,6,30]);

function mergeSortedArrays(array1, array2){
    var array = array1.concat(array2);
    //sort by rules.
    return array.sort((a,b)=>a-b);
}

console.log(mergeSortedArrays([1],[2, 3, 4]))

function mergeSortedArray2(array1, array2){
    //check input
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 0;
    let j = 0;

    if (array1.length === 0){
        return array2;
    }
    if (array2.length === 0){
        return array1;
    }
    while (array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}