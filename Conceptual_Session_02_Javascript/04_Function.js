// function - 1
// function show(){
// console.log('hello world');
// }

// show();

// function - 2
// function printInfo(name){
//     console.log('valo hoye jao', name);
//     console.log('valo hoye jao', name);
// }

// printInfo('masud');
// printInfo(15);
// printInfo(20);



// function - 3
function add(x, y){
    sum = x + y;
    return sum;
}
console.log('Sum : ',add(5,9));


console.log('\n')
console.log('4 types of function')
/*
1. No Parameter + No return
2. Has Parameter + No reurn
3. No Parameter + Has return
4. Has Parameter + Has return
*/

// No Parameter + No return
function showfunc(){
    console.log('hello');
}


// Has Parameter + No reurn
function add(x,y){
    console.log(x + y);
}
console.log(add(4, 5));

// No Parameter + Has return
function giveMoney(){
    const Money = 300;
    return Money;
}

// Has Parameter + Has return
function multi(a, b){
    const result = a*b;
    return result;
}
console.log(multi(8,9));