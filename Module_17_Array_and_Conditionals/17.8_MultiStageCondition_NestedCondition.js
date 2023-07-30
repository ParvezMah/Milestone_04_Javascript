var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log('Dan Dan danish khamu');
}
if(butterBread < money) {
    console.log('ButterfBread  khamu');
}
if(toastBiscuit > money) {
    console.log('chubai chubai toastbiscuit  khamu');
}



// Nested Conditions
var math = true;
var geometry = true;
var straightline = true;

if(math == true){
    if(geometry == true){
        if(straightline == true){

        }
        else{
            console.log('baka pothe colte hobe');
        }
    }
    else{
        console.log("pythagorus parb na");
    }
}