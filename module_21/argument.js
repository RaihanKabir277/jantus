
// function doubleIt(number){
//     const doubled = number * 2;
//     console.log(number, doubled);
// }

// doubleIt(15);

// function difference(num1, num2){
//     const diff = num1 - num2;
//     console.log(num1,num2, 'difference is ', diff);
// }

// const age1 = 40;
// const age2 = 10;
// difference(age1, age2);

// -------------return -----------------

function tenTimes(number) {
    const result = number * 10;
    return result;
}
const output = tenTimes(10);
console.log('output ',output);

function add(price1, price2){
    return price1 + price2;
}
const total = add(5, 80);
console.log(total);

console.log('------------------');

// function doMath(num1, num2){
//     const sum = num1 + num2;
//     const diff = num1 - num2;
//     const mult = sum * diff;
//     const result = mult/2;
//     return result;
// }

// const result = doMath(10, 5);
// console.log(result);

// function isOdd(number){
//     if(number % 2 ===1){
//         return true;
//     }
//     return false;
// }

// console.log(isOdd(7));
// console.log(isOdd(10));

function evenString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenString('Dhaka');

function anmous(number, double){
    if(double === true){
   const result = number * 2;
   return result;
    }
    else{
        const result = number * 3;
        return result
    }
}

console.log(anmous(5, true));
console.log(anmous(12, false));