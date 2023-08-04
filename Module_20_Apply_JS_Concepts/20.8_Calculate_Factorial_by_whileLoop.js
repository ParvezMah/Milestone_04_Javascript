console.log('Factorial  Using For loop')
function factorial(number){
    let result = 1;
    for(let i=1; i<=number1; i++){
        result = result * i;
    }
    return result;
}
const number1 = 5;
console.log('Factorial of : ', number1,' is ' ,factorial(number1));




console.log('\n');
console.log('Reverse Factorial Using While Loop');
function ReverseFacFor(number){
    let result = 1;
    for(let i=number; i>=1; i++){
        result = result * i;
    }
    return result;
}
const number2 = 5;
console.log('Factorial of : ', number2,' is ' ,factorial(number2));



console.log('\n')
console.log('Using While Loop');
function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num
        num++;
    }
    return result;
}
const number3 = 6;
const factorialNumber = factorial(number3);
console.log('Factorial of ', factorialNumber)



console.log('\n');
console.log('Reverse Factorial Using While Loop');
function ReverseFactorial(number){
    let num = number;
    let result = 1;
    while(num >=1){
        result = result * num;
        num--;
    }
    return result;
}
const number4 = 6;
const ReverseFactorialNumber = ReverseFactorial(number4);
console.log('Factorial of ', ReverseFactorialNumber)


