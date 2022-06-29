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
// const friends = ['Micheal', 'John', 'James'];

// // adds elements into array!!
// friends.push('musa');
// console.log(friends);
// const newLength = friends.push('musa');

// friends.unshift('John');
// console.log(friends);

// // removes elements
// friends.pop();
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Micheal'));
// console.log(friends.indexOf('Bob'));

// // Includes is used for conditions
// console.log(friends.includes('John'));
// console.log(friends.includes('Bob'));

// if (friends.includes('James')) {
//   console.log('You have a friend called James');
// }


// // Objects

// const musaArray = [
//   'musa',
//   'Faridu',
//   2022 - 1990,
//   'programmer'
//   ['nasa',
// 'Joe', 'Ibra'],
// ]

// const musa = {
//   firstName: 'musa',
//   lastName: 'Faridu',
//   year : 2022 - 1990,
//   job: 'programmer',
//   buddies: ['nasa','Joel','Ibra']

// }
// console.log(musa);

// // Dot notation

// console.log(musa.lastName);

// // Bracket notation

// console.log(musa['lastName']);

// const nameKey = 'Name';
// console.log(musa['first' + nameKey]);
// console.log(musa['last' + nameKey]);

// // Using Prompt

// const InterestedIn = prompt('What do you want to know about musa ? Choose between firstName, lastName, year,job and buddies.');


// // if something does not exist in the promt e.g location ,we  use if statements

// if(musa[InterestedIn]){
//   console.log(musa[InterestedIn]);
// }else {
//   console.log('Wrong request !choose between firstName,lastName,year,job and buddies' )
// }

// // Dot notation
// musa.location = 'Tokyo';
// console.log(musa.location);

// // Bracket notation 
// musa['Twitter'] = '@faridumusa';
// console.log(musa);

// // Challenge

// // Musa has 3 friends and his best friend is Ibra

// console.log(`${musa.firstName} has ${musa.buddies.length} friends and his best friend is called ${musa.buddies[2]} `);


// // Objects method

// const yuka = {
//   firstName: 'lukenge',
//   lastName: 'Yuka',
//   birthYeah: 1990,
//   job: 'Night nurse',
//   friends:['Mai','Mei','Moi'],
//   hasDriversLicense: true,

//   // calcAge: function(birthYeah){
//   //   return 2022 - birthYeah;
//   // }

//   calcAge: function(){
//     console.log(this);
//     return 2022 - this.birthYeah;
//   },

//   // Challenge #2

//   // Yuka is 32 years old night nurse, and has a drivers license

//   getSummary: function(){
//      return `${this.lastName} is a ${this.calcAge()} -year old ${yuka.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} drivers lisence.`
//   }

  

// }

// console.log(yuka.calcAge());



// //console.log(`${yuka.lastName} has ${yuka.calcAge()} years old ${yuka.job} and  ${yuka.hasDriversLicesence} has a drivers lisence `);



// console.log(yuka.getSummary());









/* N.B Array are not primitive values, they can be changed or mutated with const keyword */


// Loops

//for loops keep running while the Condition is true!

// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weight repetitions ${rep} `)
// }

// const jonas = [
//   'Jonas',
//   'Kinsman',
//   2023 - 1990,
//   'teacher',
//   ['Mike','Mai','Steve'],
//   true
// ]

// const types = [];

//    for(i = 0; i < jonas.length ; i++){
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types array

//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
//    }

//    console.log(types)
  
// // example #2
//    const years = [1989,1999,2005,2007];
//    const ages = [];

//    for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
//    }
//    console.log(ages)

//    // How to use continue and break!


// console.log('--- Only String---');
//    for(i = 0; i < jonas.length ; i++){
    
//     if(typeof jonas.length[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
//     }


// console.log('---Break with number---');
//    for(i = 0; i < jonas.length ; i++){
//     if(typeof jonas.length[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);


// }

// Looping Backwards and Loops in Loops!

const jonas = [
     'Jonas',
   'Kinsman',
      2023 - 1990,
      'teacher',
      ['Mike','Mai','Steve'],
      true
    ]
// looping backwards
    for(let i = jonas.length - 1; i >= 0; i-- ){
      console.log(i,jonas[i]);
    }

    // looping in loops

    for(exercise = 1; exercise < 4; exercise++){
      console.log(`------Starting exercise${exercise}`);

      for(rep = 1; rep < 6; rep++){
         console.log(`Exercise${exercise}: lifting weight repitition ${rep}`);
      }
    }