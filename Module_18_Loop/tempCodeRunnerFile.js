var friends = ['Minhaz', 'Dilruba', 'Kutub', 'Josna', 'Tasmir', 'Sakib', 'Mamun', "Jesmin"];
var i = 0;
while(i<friends.length){
    var friendsLength = friends[i].length;
    i++;
    if(friendsLength % 2 != 0){
        console.log(friendsLength);
        continue;
    }
    console.log(friends[i], " Hi, Barbie!");
}