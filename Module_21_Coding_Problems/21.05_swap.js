let first = 5;
let second = 7;
console.log(first, second);


console.log('\n', 'Approach 1');
const temp = first;
first = second;
second = temp;
console.log(first, second);

console.log('\n', 'Approach 2 : Destructuring');
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);