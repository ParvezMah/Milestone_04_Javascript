console.log('Problem - : Hours to Minutes')
function HoursToMin(hour){
    let minute = hour * 60;
    return minute;
}
const hour_of_class = 6;
const min_of_class = HoursToMin(hour_of_class);
console.log(min_of_class, " : Minutes");



console.log('\n');
console.log('Problem - : create an array of leap year from another array')
function findLeapYear(year){
    let LeapYear = [];
    for(let i=0; i<year.length; i++){
        if(year[i] % 4 === 0 && year[i] % 100 !==0 || year[i] % 400 === 0){
            LeapYear.push(year[i]);
        }
    }
    return LeapYear;
}

const yearArr = [2023, 2024, 2025, 2028, 2030];
const leapYearArr = findLeapYear(yearArr);
console.log(leapYearArr);