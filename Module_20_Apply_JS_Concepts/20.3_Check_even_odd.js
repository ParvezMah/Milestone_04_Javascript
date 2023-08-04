// Odd and Even number checker
function Check_even(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(Check_even(29))