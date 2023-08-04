var x = 'hello';
x = 'world';
var x = 'ripon';


// let
// let y = 'y';
// y = 'y2';
// // let y = 'y3';


// const
// const z = 'z';
// z = 'z1';
// console.log(z);
// const z = 'z3';



const name = 'mehedy';       /*for string*/
const li = name.includes('li');
console.log(li);


console.log('\n')
const pets = ['cat', 'dog', 'rat'];
const result = pets.includes('dog');
console.log(result);


console.log('\n');
console.log('1. slice(start, stop)')
const mehedy = ['ant','camel','duck','elephant','cat','dog'];
console.log(mehedy.slice(2));
console.log(mehedy.slice(2,4));


console.log('\n');
console.log('2. splice(start, howMuch, insetItem)')
const mehedy1 = ['ant','camel','duck','elephant','cat','dog'];
console.log(mehedy1.splice(2,1));
console.log(mehedy1.splice(2,1,'rat'));
console.log(mehedy1);
mehedy.shift();
mehedy.shift();
console.log(mehedy);




console.log('\n');
console.log('3. Objects')
const person = {
    name : 'mehedy',
    age : 25,
    adderss : 'rajshahi',
    phone : '123456789'
}

console.log(person.age);
console.log(person['name']);
const Obx = "phone";
console.log(person[Obx]);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);