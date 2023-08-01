var shoppingCart = {
    computer : 'HP',
    mouse : 'A4tech',
    keyboard: 'A4tech',
    processor : 'i10',
    RAM : 'MSI',
    pen : 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// console.log('\n');
// console.log('Using While Loop');
// var i = 0;
// while(i< keys.length){
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, ' ', propertyValue);
//     i++;
// }


// console.log('\n');
// console.log('Using for Loop');
// for( var i =0; i< keys.length;i++){
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, ' ', propertyValue);
// }