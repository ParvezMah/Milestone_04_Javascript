// if we pass wrong data the function will response me.
function findSum(arr){
    if(!Array.isArray(arr)){
        return 'Alert! Please provide me an array';
    }

    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
const x = [1,2,3,4,5,6,7];
console.log(findSum('parvez'))



// if we pass wrong data the function will response me.
console.log('\n');
function findVowel(s){
    let vowel = 0;
    let consonent = 0;
    let space = 0;
    for(let i=0;i<s.length; i++){
        if(s[i] === 'a' || s[i] === 'e'|| s[i] === 'i' || s[i] ==='o' || s[i]==='u'){
            vowel++;
            // console.log(vowel, ':', s[i]);
        }
        else if(s[i] === ' '){
            space++;
            // console.log(consonent, ':', s[i]);
        }
        else{
            consonent++;
        }

    }

    const Obj = {
        VowelCount : vowel,
        ConsonentCount : consonent,
        SpaceCount : space
    }

    return Obj;
}

const sentence ='Bangladesh is my home country';
const countVowel = findVowel(sentence);
console.log('Total is : ', countVowel);