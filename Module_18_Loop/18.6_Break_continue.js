// for (var i=0; i<=20; i++){
//     console.log(i);
//     if(i>10)
// }



var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for(var i = 0; i< items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item)
}




var numbers = [45,87, 89, 56, 32, 51,33, 25];

for(var i =0;i<numbers.length;i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}