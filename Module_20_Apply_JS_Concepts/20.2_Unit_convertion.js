console.log('\n');
console.log('inchToFeet Converter Function');
//  const myInch = 12;
// // const myFeet = myInch /12;
// // console.log(myFeet , " Feet");


// // const dataInch = 144;
// // const dadaFeet = dataInch /12;
// // console.log(dadaFeet , " Feet");


// // const dadiInch = 144;
// // const dadiFeet = dadiInch /12;
// // console.log(dadiFeet , " Feet");




console.log('\n');
console.log('inchToFeet Converter Function');
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 100;
const dadaFeet = inchToFeet(dadaInches);
console.log('dadaFeet : ', dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nanaFeet : ', nanaFeet);



console.log('\n');
console.log('MileToKM Converter Function')
function MilesToKM(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const officeFromeHome = MilesToKM(7);
console.log('officeFromeHome : ', officeFromeHome, ' Kilemeters');


const CollegeFromeHome = MilesToKM(9.2);
console.log('CollegeFromeHome : ', CollegeFromeHome, ' Kilemeters');





