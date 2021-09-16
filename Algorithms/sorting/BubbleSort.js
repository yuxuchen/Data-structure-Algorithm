const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


function BubbleSort(list){
    const length = list.length;
    for(let i =0; i<length; i++){
        for(let j=0; j<length; j++){
            if(list[j]>list[j+1]){
                let tmp = list[j];
                list[j] = list[j+1];
                list[j+1] = tmp;
                 }
                }
            }
        }
BubbleSort(numbers)
console.log(numbers)