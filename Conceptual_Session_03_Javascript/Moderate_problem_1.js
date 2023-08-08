function findingBadData(arr){
    if(!Array.isArray(arr)){
        console.log(Array.isArray(arr));
        return 'Please provide me an array';
    }
    else{
        let badData = 0;
        // for(let i=0; i<arr.length; i++){
        //     if(typeof arr[i] !== 'number'){
        //         return 'Please provide me a number';
        //     }
        //     else{
        //         if(arr[i] < 0){
        //             badData++;
        //         }
        //         else{
        //         }
        //     }
        // }
        // return badData;


        // for of loop
        for(let item of arr){
            if(typeof item !== 'number'){
                return 'Please provide me a number';
            }
            else{
                if(item < 0){
                    badData++;
                }
            }
        }
        return badData;


    }


}
const arr = [1, 2, -3, 4, -5, 3, 0, 7, -8];
console.log(findingBadData(arr));


// if(!true){
//     console.log('hello');
// }