const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array){
    const length = array.length;
    for(let i =0; i<length-1; i++){
        for(let j=i+1; j<length; j++){
            if(array[i]>array[j]){
                let tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
        }
    }
}
selectionSort(numbers);
console.log(numbers)