const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);

// let rev = numbers.reverse();

// console.log(rev);


//  ---------- another way ---------
// const rev = [];

// for(const num of numbers){
//     console.log(num);
//     rev.unshift(num);

// }
// console.log(rev);
// -----------another way------------

// const rev = [];
// for(let i=0; i<numbers.length; i++){
//     const num = numbers[i];
//     rev.unshift(num);
// }

// ----------another way -------------
for(let i=numbers.length - 1; i>=0; i--){
    let num = numbers[i];
    console.log(num);
}