function isInteger(number){
    if(typeof number !== 'number' ){
        return 'Please! Provide a number';
    }
    else{
        if(number % 1 === 0){
            return true;
        }
        else{
            return false;
        }
    }


}
console.log(isInteger(2));


const a = [1,2,3,5];
console.log('a is an : ', Array.isArray(a));