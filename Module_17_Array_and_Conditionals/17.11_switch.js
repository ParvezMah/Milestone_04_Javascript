// When to use switch case;
// more than 1000+ condition lekhar somoy

const grade = 'C';
switch(grade){
    case "A":
        console.log('A - Very Good');
        break;
    case "B":
        console.log('B - Good, Keep learning');
        break;
    case "C":
    case "D":
        console.log('D - Not Good');
        break;
    default:
        console.log('You are failed');
}