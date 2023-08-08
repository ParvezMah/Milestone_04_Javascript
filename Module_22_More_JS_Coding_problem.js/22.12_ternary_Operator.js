let age = 19;
if(age >= 18){
    console.log('You are adult');
}
else if(age >=15){
    console.log("Not enough age to be adult");
}
else{
    console.log('You are baby, You should stay at your home');
}



console.log('\n');

let age2 = 36
// if block         
let result = age2 >= 18 ? 'Adult' :  'Baby';

//             if block               else if block                            else
let result2 =  age2 >= 18 ? 'Adult' : age2 >=15 ? "Not enough age to be adult" : 'Baby'; 
// 
let result3 =  age2 > 18 ? age2 >=30 ? 'Senior Adult' : 'Adult' : age2 >=15 ? "Not enough age to be adult" : 'Baby'; 
console.log('result1 ', result);
console.log('result2 ', result2);
console.log('result3 ', result3);