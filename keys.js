
const computer = {
    brand: 'color',
    proce: 3500,
    processor: 'intel',
    hdd: '512gb'
}
const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);
// delete properties .......
delete computer.hdd;
console.log(computer);