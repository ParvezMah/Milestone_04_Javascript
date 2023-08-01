var shoppingCart = {
    computer : 'HP',
    mouse : 'A4tech',
    keyboard: 'A4tech',
    processor : 'i10',
    RAM : 'MSI'
}

console.log(shoppingCart);



// 1. Dot(.) Notation  Method, when we know the property name.
var computerValue = shoppingCart.computer;
console.log(computerValue);






console.log('\n');
// 2. using index like array, when we know the property name.
var RAMvalue = shoppingCart['RAM'];
console.log(RAMvalue);





console.log('\n');
// 3. using index like array, when we know the property name.
var propertyName = shoppingCart.RAM;
shoppingCart[propertyName]  = 1000;
console.log(shoppingCart[propertyName]);




console.log('\n');
// using object.keys()
// All keys
var allkeys = Object.keys(shoppingCart);
console.log(allkeys);

// All values
var allValues = Object.values(shoppingCart)
console.log(allValues);




var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);

console.log(shoppingCart);

shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 300;
console.log(shoppingCart);