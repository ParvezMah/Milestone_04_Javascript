// We can detect by typeof string, number, bolean, objects, function
// we can't detect by typeof array 
// we can detect array using this :  Array.isArray();

const student = [13,14, 15, 16,17];
console.log(Array.isArray(student));

console.log(student.includes(15));


console.log('\n');
const newStudent = [21,22,23,24];
const allStudent = student.concat(' : ',newStudent);
console.log(allStudent);