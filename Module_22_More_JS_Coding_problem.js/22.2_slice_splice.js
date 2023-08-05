// const friends = [12,45, 32,44, 62,29,69, 87];
// const partial = friends.slice(2,5);
// console.log(partial);
// console.log(friends);


console.log('\n','splice');
// removes element
// returning removes element
// will change the original array
const friends = [12,45, 32,44, 62,29,69, 87];
// const partial = friends.splice(2,5);
const partial = friends.splice(2,5, 99, 555, 777);
console.log(partial);
console.log(friends);

