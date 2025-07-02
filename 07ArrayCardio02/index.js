// ## Array Cardio Day 2
 const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
  ];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
console.table(comments);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const temp = new Date();
const currYear = temp.getFullYear();

const age1 = people.some(people =>{
 if(currYear - people.year >=19)
     return true;
 else return false;
})
console.log(age1);

// Array.prototype.every() // is everyone 19 or older?
const age2 = people.every(people => {
    if(currYear - people.year>=19) return true;
    else return false;
})

console.log(age2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const com1 = comments.find(c => {
    if(c.id==823423){
        return true;
    }
});
console.table(com1);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const com2 = comments.findIndex(c => (c.id===823423));
console.log({com2});
// comments.splice(com2, 1);
// console.table(comments);

const newCom = [
    ...comments.slice(0, com2),
    ...comments.slice(com2+1)
];
console.table(newCom);