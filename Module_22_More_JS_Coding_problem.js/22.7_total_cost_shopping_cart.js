const shoppingCart = [
    { name:'shoe', price:1200, quantity: 2},
    { name:'shirt', price:2200, quantity: 5},
    { name:'pant', price:3700, quantity: 4},
    { name:'belt', price:700, quantity: 3}
];
function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        let price = products[i].price;
        let quantity = products[i].quantity;
        sum = sum + price * quantity;
    }
    return sum;
}
const shopping = totalCost(shoppingCart);
console.log('Total Price is : ',shopping);