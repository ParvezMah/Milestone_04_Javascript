
console.log('\n');
console.log('Code - 1');
function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('Average Marks is : ',myAverage);




console.log('\n');
console.log('Code - 2');
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(45, 36);
const finalResult = add(result1, result2);
console.log(finalResult);





/* 
Function parameter,    Function Return
1. No return & No parameter
2. Has return & No parameter
3. No Return & Has parameter
4. Has return & Has parameter
*/