let foo = 0;
let bar = 0;
let foobar = 0;
for(let i=1; i<=50; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
        foobar++;
    }
    else if(i % 3 === 0){
        console.log('foo');
        foo++;
    }
    else if(i % 5 === 0){
        console.log('bar');
        bar++;
    }
    else{
        console.log(i);
    }
    
}
console.log('foo ',foo,' bar ',bar,' foobar ', foobar);