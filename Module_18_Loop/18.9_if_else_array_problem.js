var fruits = ['Apple', 'Banana', 'Orange'];
var BananIndex = fruits.indexOf('Banana');
fruits[BananIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');


console.log('\n');
console.log('Problem - 3');
var num1 = 13;
var num2 = 79;
var num3 = 145;

if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
    else{
        console.log(num3)
    }
}
else{
    if(num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
