function isLGSeven(x){
    if(typeof x !== 'number'){
        return 'Please Provide me a number';
    }
    else{
        const differ = x - 7
        if(differ < 7){
            return differ;
        }
        return x * 2;
    }
}
console.log(isLGSeven(5));