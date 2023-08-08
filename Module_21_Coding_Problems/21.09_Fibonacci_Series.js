// 0,1,1,2,2
/*
fibo[3] = fibo[2] + fibo[1]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for(let i=2; i<20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

console.log(Math.abs(-78));
