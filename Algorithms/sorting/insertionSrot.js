const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array){
    const length = array.length;
   for( let i =1; i<length; i++){
       let tmp = array[i];
       for(let j=i-1; j>=0;j--){
           if(tmp<array[j]){
               array[j+1]=array[j];
               array[j] = tmp;
           }else{break}
       }
   }
}

insertionSort(numbers)
console.log(numbers)