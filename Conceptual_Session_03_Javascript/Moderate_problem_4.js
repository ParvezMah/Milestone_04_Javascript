function printDetais(person){
        if(typeof person !== 'object'){
            return 'Please! provide me an object'
        }
        else{
            const name = person.name || 'nai';
            const age = person.age || 'nai';
            const email = person.email || 'nai';
            const bow = person.bow || 'nai';


            console.log('Amar nam: ',name,'Amar age: ', age,'Amar email: ', email,'Amar Bow: ', bow);

        }

}
const obj = {
    name : 'mehedy',
    age : 26,
    email : 'abc@gmail.com'
}
console.log(printDetais(obj));