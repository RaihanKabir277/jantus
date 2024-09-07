const bottleColor = 'white';
const bottlePrice = 45;
const bottledrinks = 'water';

// object create 
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}
const subject = {
    name: 'cse',
    teacher: 'solaiman',
    examdate: '23 sept',
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'final exam',
        score: 100
    }

}
//   value change 
subject.teacher = 'Aminur';

// console.log(subject);
console.log(subject.teacher);

// bracket diye access kora
console.log(subject['examdate']);