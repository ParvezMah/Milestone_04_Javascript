const lyrics = 'tumi bondo kala pakhi ami jeno ki. bosonto kale tomai bolte parini';

console.log('\n','Includes')
const doesExist = lyrics.includes('pakhi');
console.log(doesExist);


console.log('\n','indexOf');
const kalaIndex = lyrics.indexOf('kala');
console.log(kalaIndex);


console.log('\n','startswith');
console.log(lyrics.startsWith('tumi'));


console.log('\n','endswith');
console.log(lyrics.endsWith('parini'));