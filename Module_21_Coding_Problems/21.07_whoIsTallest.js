
// console.log('\n','Lowest Number');
// function MaxinArray(Numbers){
//     let largest = Numbers[0];
//     for(let i=0; i<Numbers.length; i++){
//         console.log(Numbers[i])
//         if(Numbers[i] > largest){
//             largest = Numbers[i];
//         }
//     }
//     return largest;

// }
// const heights = [167,190,120,165,137,852];
// const tallest = MaxinArray(heights);
// console.log('Largest Number is : ',tallest);


console.log('\n','Lowest Number');
function lowestNumber(Numbers){
    let Lowest = Numbers[0];
    for(let i=1; i<Numbers.length; i++){
        if(Numbers[i] < Lowest){
            Lowest = Numbers[i];
        }
    }
    return Lowest;

}
const heights2 = [167,190,120,165,137,852];
const lowest = lowestNumber(heights2);
console.log('Lowest Number is : ',lowest);