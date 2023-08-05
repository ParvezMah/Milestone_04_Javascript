const phones = [
    { name:'Samsung', camera:12, storage:'32gb', price:36000, color:'silver'},
    { name:'walton', camera:12, storage:'32gb', price:22000, color:'silver'},
    { name:'iphone', camera:12, storage:'32gb', price:82000, color:'silver'},
    { name:'Xiomi', camera:12, storage:'32gb', price:52000, color:'silver'},
    { name:'Oppo', camera:12, storage:'32gb', price:20000, color:'silver'},
    { name:'Nokia', camera:12, storage:'32gb', price:44000, color:'silver'},
    { name:'HTC', camera:12, storage:'32gb', price:62000, color:'silver'},
]
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=1; i<phones.length; i++){
        if(phones[i] < cheapest){
            cheapest = phones[i];
        }
    }    
    return cheapest;
}
const cheapPricePhone = cheapestPhone(phones);
console.log('I got my cheap Phone : ',cheapPricePhone);