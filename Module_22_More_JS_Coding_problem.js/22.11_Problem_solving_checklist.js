// Probel - 1
// 1. feet To Inch
function feetToInch(feet){
    let inch = feet * 12;
    return inch;

}
const feetGiven = 12;
const InchOutput = feetToInch(feetGiven); 
console.log('Total Inch Found : ',InchOutput);








// 2. centimeter to meter
console.log('\n', '2. Centimeter to Meter');
function centimeterToMeter(centimeter){
    let meter = centimeter * 100;
    return meter;

}
const centimeterGiven = 10;
const meterFound = centimeterToMeter(centimeterGiven);
console.log('Total Meter Found is : ', meterFound);




// 3. count paper 
// book1 -- 100
// book2 -- 200
// book3 -- 300
// paperRequirements
console.log('\n', '3. Count Paper');
function paperRequirements(book1, book2, book3){
    // page Needed per book
    const EnglishBook = 100;
    const PhysicsBook = 200;
    const BanglaBook = 300;

    // page needed per book with Quantity
    const perEnglishBook = EnglishBook * book1;
    const perPhysicsBook = PhysicsBook * book2;
    const perBanglaBook = BanglaBook * book3;

    // total page of total books
    const total = perEnglishBook + perPhysicsBook + perBanglaBook;
    return total;




}
let Eng = 3;
let Phy = 2;
let Ban = 4;
const PageOfBooks = paperRequirements(Eng, Phy, Ban);
console.log('Total Page of Books : ', PageOfBooks, 'Pcs');


// 4. ['sajid', 'mamun', 'kamal','jubayer bin rashed', 'chiku']
console.log('\n','4 : bestFriend');
function bestFriend(friend){
    // largest friend is best friend
    let largest = friend[0];
    for(let i=1; i<friend.length; i++){
        if(friend[i].length > largest.length){
            largest = friend[i];
        }
    }
    return largest;

}
const friends = ['sajid', 'mamun', 'kamal','jubayer bin rashed', 'chiku'];
const findBestFriend = bestFriend(friends);
console.log(findBestFriend);



// 5. [45,87,96,11,63, -56,71,28]
console.log('\n','5. OnlyPositve Number');
function onlyPositive(number){
    let positive = [];
    for(let i=0; i<number.length; i++){
        if(number[i] > 0){
            positive.push(number[i]);
        }
        else{
            break;
        }
    }
    return positive;
}
const number = [45,87,96,11,63, -56,71,28];
const positiveNumberArray = onlyPositive(number);
console.log('Positive Num Array is : ', positiveNumberArray);
