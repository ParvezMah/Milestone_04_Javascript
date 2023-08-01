// Slice
var Numbers = [1, 2, 3, 4 ,5, 6, 7, 8, 9];
Numbers[4] = 100;
console.log(Numbers);
console.log(Numbers.slice(2, 6));

var name = 'Ariana Grande is singing';
console.log(name.includes('Has'));
console.log(name.substring(0,10));
console.log(name.substring(4,10));



name[1] ='P';
// String is immutable
console.log(name);