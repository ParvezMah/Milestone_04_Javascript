console.log('Problem - 1 : Sum of Arr');
function sumofArr(arr){
    let sum = 0;
    // normal for loop
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;

    // for of loop
    // for(let i of arr){
    //     sum +=i;
    // }
    // return sum;
}
nums = [2,3,4,5,6,7];
total = sumofArr(nums);
console.log(total)


console.log('\n')
console.log('Problem - 2 : Odd Number from Array');
function OddNumfromArr(arr){
    let ODD_list = [];
    for(let item of arr){
        if(item % 2 === 1){
            ODD_list.push(item);
        }
    }
    return ODD_list;
}
const Numbers = [1,2,3,4,5,6,7,8];
const total2 = OddNumfromArr(Numbers);
console.log(total2);



console.log('\n')
console.log('Problem - 3 : Looping through an Object');