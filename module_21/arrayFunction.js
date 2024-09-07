

function sum(numbers){
    let sum = 0;
 console.log(numbers);
 for(const number of numbers){
    console.log(number);

    sum += number;
   
 }
 return sum;
}
const numbs = [54, 62, 12, 6];
const total = sum(numbs);
console.log('Sum of Numbers:',total);

