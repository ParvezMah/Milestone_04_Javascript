var shoppingCart = {
    computer : 'HP',
    mouse : 'A4tech',
    keyboard: 'A4tech',
    processor : 'i10',
    RAM : 'MSI',
    pen : 25,
    shoes: 2
}

var item = [12, 34, 56, 74, 23, 43, 35, 23, 94];

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

console.log('\n');
console.log('Using While Loop');
var i = 0;
while(i< keys.length){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, ' ', propertyValue);
    i++;
}


console.log('\n');
console.log('Using for Loop');
for( var i =0; i< keys.length;i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, ' ', propertyValue);
}



console.log('\n');
console.log('Using for In Loop');
for(var property in shoppingCart){
    const value = shoppingCart[property];
    console.log(property, ":", value);
}
console.log('\n');
console.log('Using for of Loop in objects');
for(var property of shoppingCart){
    const value = shoppingCart[property];
    console.log(property, ":", value);
}


console.log('\n');
console.log('Using for in Loop to array');
for(var property in item){
    console.log(property);
}

console.log('\n');
console.log('Using for of Loop to array');
for(var property of item){
    console.log(property);
}