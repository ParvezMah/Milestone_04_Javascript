const result = Math.pow(3, 8);
console.log(result);

console.log('\n','abs()')
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('You gus can be friend');
}
else{
    console.log('You guys stay apart');
}

console.log('\n','ceil()')
const num3 = 2.46;
console.log(Math.ceil(num3));
console.log(Math.floor(num3));

console.log('\n','round()')
console.log(Math.round(num3));

// console.log('\n','random()')
// const randomNum = Math.round(Math.random()*100);
// console.log(randomNum);
