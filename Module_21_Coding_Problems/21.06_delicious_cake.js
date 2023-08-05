console.log('\n', 'Problem - 1: Max');
const jim = 95;
const della = 98;
const chinku = 96;
if(jim > della){
    console.log("Jim will get the cake");
}
else{
    console.log("della will get the cake");
}


console.log('\n', 'Problem - 2: Max Number')
if(jim>della && jim>chinku){
    console.log("Jim will get the cake");
}
else if(della>jim && della>chinku){
    console.log("della will get the cake");
}
else{
    console.log("chinku will get the cake");
}


console.log('\n', 'Shorthand form of Problem 2')
const MaxCake = Math.max(jim, della, chinku);
console.log(MaxCake);