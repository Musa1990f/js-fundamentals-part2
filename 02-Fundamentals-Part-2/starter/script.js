// 'use strict';
// function logger(){
//   console.log('My name is Musa')
// }

// // calling/invoking/ running a function!
// logger();

// function fruitProccessor (appples, oranges){
//   const juice = `Juice with ${appples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProccessor(4,7);
// console.log(appleJuice);
 
// const appleOrange = fruitProccessor(8,9);
// console.log(appleOrange);


//   //Function declaration

// function calcAge1 (birthYear){
//   return 2044 - birthYear ;


//   }

//   const age1 = calcAge1(1990);
  

//   // function Expression

//   const calcAge2 = Function(birthYear) {
//     return 2044 - birthYear
//   }
// const age2 = calcAge2(1990);

  
//   console.log(age1,age2);

//Arrow function 
// const calcAge3 = birthYear => 2044 - birthYear; 
// const age3 = calcAge3(1990);
// console.log(age3);

// // Using arrow functions with more parameters

// const retirementAge = (birthYear, firstName) => {
//   const age4 = 2037 - birthYear;
//    const retirement = 65 -age4;
//   // // return retirementAge;
//    return `${firstName} retires in ${birthYear}`
// }
//  console.log(retirementAge(1991, 'Musa'));

//  // Functions calling other functions

// function cutFruitPieces(fruit){
//   return fruit *  4;
// }

//  function fruitProccessor (appples, oranges){
//   const applePieces = cutFruitPieces(appples);
//   const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//      return juice;
//   }

//   console.log(fruitProccessor(4,6));

 // Examples of  functions

//  ### function is used before declaration!!!!

 // #1 function declaration

//  function calcAge0(birthYear){
//   return 2045 - birthYear;
//  }


// #2  Function expression
// ### function is stored in a variable!!!

// const calcAge0 = function(birthYear){
//   return 2045 - birthYear;
// }

// #3 Arrow functions
// ### one line function && has no this. keyword!!!
// const calcAge0 = birthYear => 2045 - birthYear;

// 👆👆👆 Three different ways of writing Functions,but all work in a similar way,
// receive input data , transform data and output data!!!




// **********ARRAYS***********

// // const friends = ['Micheal', 'John', 'James'];
// console.log(friends);

// // This can also be used!!
// const yr = new Array(1999, 2000, 2374);
// console.log(yr);

// // How to get out Arrays!
// console.log(friends[0]);
// console.log(friends[2]);

// // How to find actul number in a Array!
// console.log(friends.length);

// // how to get index fro the last array!!
// console.log(friends[friends.length - 1]);

// // How to change or mutate an array!!

// friends[2] = 'Jay';
// console.log(friends);

// // Array can hold different types of values at the same time!!
// const firstName = 'musa';
// const musa = [firstName,'faridu', 2022 - 1990, friends];
// console.log(musa.length);

// // Exercise

// const calcAge = function(birthYear) {
//      return 2044 - birthYear;
//      }

// const years = [1999,1987,1890,];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age4 = calcAge(years[years.length - 1 ]);
// console.log(age1,age2,age4);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
// console.log(ages);

// Array methods 
const friends = ['Micheal', 'John', 'James'];

// adds elements into array!!
friends.push('musa');
console.log(friends);
const newLength = friends.push('musa');

friends.unshift('John');
console.log(friends);

// removes elements
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Micheal'));
console.log(friends.indexOf('Bob'));

// Includes is used for conditions
console.log(friends.includes('John'));
console.log(friends.includes('Bob'));

if (friends.includes('James')) {
  console.log('You have a friend called James');
}




















/* N.B Array are not primitive values, they can be changed or mutated with const keyword */