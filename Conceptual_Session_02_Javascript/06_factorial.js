console.log('1 : factorial Using Loop ')
let result = 1;
for(let i=5; i>=1;i--){
    result*=i;
}
console.log(result);


console.log('\n')
console.log('2 : factorial Using Function ')
function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }

    let fact = 1;
    for(let i=number; i>=1;i--){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5));

console.log('\n')
console.log('3 : factorial Using Recursion ')
