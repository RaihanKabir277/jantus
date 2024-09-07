

// var capital = 'Dha ka';

// console.log(capital.length);
// console.log(capital[4]);

// const school = 'RAZ UK USA';
// console.log(school);
// console.log(school.toLowerCase());

// const subject = 'Chemistry';
// const book = 'chemistry';

// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('I am reading book');
// }
// else{
//     console.log('hudai ghumai');
// }

// const drink = 'water';
// const liquid = '  water';

// if(drink.trim() === liquid.trim()){
//     console.log('need water');
// }
// else{
//     console.log('find water');
// }

// --------------------index slice --------

// const address = 'noakhali';

// const part = address.slice(2,5);
// console.log(part);

// ----------------index spilt-------------

// const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

// 
//   ..................index join..........
// const friend = ['rahim', 'kahim', 'dalim', 'mahim',]

// console.log(friend.join());
// console.log(friend.join('|'));

// -----------string concat ---------

// const a1 = 'raihan';
// const a2 = 'kabir';
// const fullName = a1 + ' ' + a2;
// console.log(fullName);
// console.log(a2.includes('b'));

// ---------------reverse a string ---------
const sentence = 'I am learning web dev';
let reverse = '';

// for(let letter of sentence){
//     console.log(letter);

// }
// for(let letter of sentence){
//     reverse = letter + reverse;
// }
// console.log(reverse);

// let rev = '';
// for(let i=0; i<sentence.length; i++){
//     // console.log(sentence[i]);
//     let letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);
//   sortut ........
const reversed = sentence.split('').reverse().join('');
console.log(reversed);