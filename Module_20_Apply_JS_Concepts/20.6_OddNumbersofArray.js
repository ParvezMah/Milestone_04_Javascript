// function getSumofArray(numbers){
//     let sum = 0;
//     for(let i=0; i<numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;


// console.log('Sum is : ', getSumofArray([12, 34, 56, 74, 23, 43, 35, 23, 94]));




console.log('\n');
function getOddNumberofArray(numbers){
    const OddNumber = [];
    for(let i=0;i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index, element);
            OddNumber.push(element);
        }
    }
    return OddNumber;
}
const myNumbers = [12, 34, 56, 74, 23, 43, 35, 23, 94];
const oddNumbers = getOddNumberofArray(myNumbers);

console.log('Odd Number is : ', oddNumbers);


const oddNumbersSum = getSumofArray(oddNumbers);
console.log('Odd Number Sum is : ', oddNumbersSum)