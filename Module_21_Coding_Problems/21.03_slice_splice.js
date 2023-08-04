const lyrics = 'tumi bondo kala pakhi ami jeno ki. bosonto kale tomai bolte parini. sada sada kala kala';
console.log(lyrics);


// console.log('\n', 'Split')
// const parts = lyrics.split('.');
// const sentence = lyrics.split(' ');
// const chars = lyrics.split('');

const partial = lyrics.slice(5,8);
console.log(partial);
const partial2 = lyrics.substring(5,8);
console.log(partial2);

const lines = ['tumi bondo kala pakhi ami jeno ki',
            'bosonto kale tomai bolte parini',
            'sada sada kala kala'];

const newLines = lines.join(' : ');
console.log(newLines);
