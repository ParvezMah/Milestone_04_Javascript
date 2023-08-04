// [12, 34, 56, 74, 23, 43, 35, 23, 94]
function oddNumbersformArray(numbers){
    let OddNumber = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            console.log(numbers[i], 'odd number');
            OddNumber.push(numbers[i]);
        }
    }
    return OddNumber;
}
console.log(oddNumbersformArray([12, 34, 56, 74, 23, 43, 35, 23, 94]))


// [2023, 2024, 2025, 2028, 2030]
console.log('\n');
function findLeapYear(year){
    let LeapYear = [];
    for(let i=0; i<year.length; i++){
        if(year[i] % 4 === 0 || year[i] % 400 === 0 && year[i] % 100 !==0){
            console.log(year[i], ' a leap year');
            LeapYear.push(year[i]);
        }
    }
    return LeapYear;
}
console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]))



console.log('\n');
// function multipyOfArray(arr){
//     let result = 1;
//     for(let i=1; i<=arr; i++){
//         result = result * i;
//     }
//     return result;
// }
// console.log(multipyOfArray(7))



// console.log('\n');
// function multipyOfArray(arr){
//     let result = 1;
//     let i = 1;
//     while(i<=arr){
//         result = result * i;
//         i++;
//     }
//     return result;
// }
// console.log('While Loop ', multipyOfArray(7))



// console.log('\n');
// function multipyOfArray(arr){
//     let result = 1;
//     let i = arr;
//     while(i>=1){
//         result = result * i;
//         i--;
//     }
//     return result;
// }
// console.log('Reverse While Loop ', multipyOfArray(7))


console.log('\n');
function ReverseFac(number){
    let result = 1;
    for(let i=number; i>=1; i++){
        result = result * i;
    }
    return result;
}
console.log(ReverseFac(7));