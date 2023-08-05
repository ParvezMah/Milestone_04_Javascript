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



console.log('\n');
console.log('3. Objects using loop to get keys and values both at a time');

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

for(let i=0; i<keys.length; i++){
    const Obj_key = keys[i];
    const Obj_val = person[Obj_key];
    console.log(Obj_key, " : ", Obj_val);
}

console.log('\n');
// for in loop
for(let i in person){
    let Obj_key2 = i;
    let Obj_val2 = person[Obj_key2];
    console.log(Obj_key2,":",Obj_val2);
}
