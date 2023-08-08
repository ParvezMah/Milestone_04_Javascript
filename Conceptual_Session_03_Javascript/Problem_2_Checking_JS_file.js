// Create funtion that takes input a file and checks that file is a js file or not.

console.log('\n','First Approach');
function isJavaScript(filename){
    if(typeof filename !== 'string'){
        return "Please! provide me a valid file name (string)";
    }
    else{
        // if(filename.toLowerCase().endsWith('.js') === true){
        //     return true;
        // }
        // else{
        //     return false;
        // }

        return filename.toLowerCase().endsWith('.js');      /* return shorthand */
    }

    
}
console.log(isJavaScript('hello.css'));


console.log('\n','Second Approach');
function isJavaScript1(filename1){
    if(typeof filename1 !== 'string'){
        return 'Please! Provide me an String';
    }
    else{
        const arr = filename1.split('.');
        const lastElement = arr.pop();
        if(lastElement.toLowerCase() === 'js'){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isJavaScript1('hello.js'));