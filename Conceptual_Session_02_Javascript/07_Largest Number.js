function biggestFriend(friend){
    let biggest = friend[0];
    for(let i=1; i<friend.length; i++){
        if(friend[i].length > biggest.length){
            biggest = friend[i];
        }
    }
    return biggest;
}

const friends = ['arif','rokib','saki','sunny', 'mosaddek','babul'];
const bigFriend = biggestFriend(friends);
console.log('Biggest Friend is : ', bigFriend);