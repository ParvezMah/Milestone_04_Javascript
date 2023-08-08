// let's find out prime numbers from an array
function findPrimeNumbers(num){
    if(!Array.isArray(num)){
        return 'Provide me an valid array';
    }
    else{
        let prime = []
        for(let item of num){
            if(item > 1){
                let isPrime = true;
    
                for(let i=2; i<item; i++){
                    if(item % i === 0){
                        isPrime == false;
                        break;
                    }
                }
                if(isPrime === true){
                    prime.push(item);
                }
            }
        }
        return prime;
    }

}
const numbers = [4, 8, 6, 10, 19,13, 11];
console.log(findPrimeNumbers(numbers));