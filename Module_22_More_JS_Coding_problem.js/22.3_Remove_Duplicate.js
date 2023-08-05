const names = ['abul','babul','cabul','dabul','ebul','babul','abul','kabul','gabul','cabul','babul','abul','abul'];
function removeDuplicate(name){
    let unique = [];
    for(let i=0; i<name.length; i++){
        if(unique.includes(name[i]) === false){
            unique.push(name[i]);
        }
    }
    return unique;

}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);