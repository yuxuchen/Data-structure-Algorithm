//1.Identify the base case
//2.Identify the recursive case
//3.Get closer and closer and return when needed. Usually you have 2 returns.

function findFactorialRecursive(number){
    if(number === 2){
        return 2;
    }
    return number*findFactorialRecursive(number-1)
}

function findFactorIterative(number){
    let answer = 1;
    while(number){
        answer = answer*number;
        number--;
    }
    return answer;
}

console.log(findFactorIterative(5));
console.log(findFactorialRecursive(6))