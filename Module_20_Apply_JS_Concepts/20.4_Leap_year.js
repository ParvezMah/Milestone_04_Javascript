// Checking Leap Year 
function leapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(leapYear(1960));
console.log(leapYear(2023));
console.log(leapYear(2002));


// Leap Year logic from google
function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
        console.log(year, " is a Leap Year");
    }
    else{
        console.log(year, ' is not aLeap year');
    }
}
isLeapYear(2100);