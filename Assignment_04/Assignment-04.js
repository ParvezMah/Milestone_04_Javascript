function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please! Provide me a number';
    }
    else if(number < 0){
        return "Please! Provide me a Positive number";
    }
    else{
        return number * number * number;
    }

}
cubeNumber(3);







function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please! Provide me a valid string';
    }
    return string1.includes(string2);
}
matchFinder('John Doe', 'ohn');







function sortMaker(arr) {
    for(let i=0; i<=arr.length; i++){
        if(arr[0] == arr[1]){
            return "equal"
        }
        else{
            if(arr[0]>0 && arr[1]>0){
                return arr.reverse(arr.sort());
            }
            else{
                
                return 'Invalid Input';
            }
        }
    }
}
sortMaker([4,4]);







function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'Please! Provide me an Object';
    }
    else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        return street+','+house+','+society;
    }
}
const address = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
findAddress(address);






function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray) || changeArray == []){
        return 'Please Provide a valid array';
    }
    let sum =0;
    for(let item of changeArray){
        if(typeof item !== 'number' || item < 0){
            return 'Please Provide me a array of positive number';
        }
        sum+=item;
    }
    if(sum > 10){
        return true;
    }
    else{
        return false;
    }
}
canPay([1,2,5],10);