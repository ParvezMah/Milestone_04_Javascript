// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(' ',text2);
// console.log(text3);


console.log('\n','String Search');
// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match("ain"));


// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(iterator);


console.log('\n','String Template');
// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text);


// let price = 10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// delete fruits;
// console.log(fruits);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);



const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(citrus);

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits2.splice(1,3, "kola","kela","bamboll");
console.log(citrus2);
console.log(fruits2);