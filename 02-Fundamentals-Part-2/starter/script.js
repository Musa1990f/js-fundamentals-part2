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
const calcAge3 = birthYear => 2044 - birthYear; 
const age3 = calcAge3(1990);
console.log(age3);

// Using arrow functions with more parameters

const retirementAge = (birthYear, firstName) => {
  const age4 = 2037 - birthYear;
   const retirement = 65 -age4;
  // // return retirementAge;
   return `${firstName} retires in ${birthYear}`
}
 console.log(retirementAge(1991, 'Musa'));

 // Functions calling other functions

function cutFruitPieces(fruit){
  return fruit *  4;
}

 function fruitProccessor (appples, oranges){
  const applePieces = cutFruitPieces(appples);
  const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
     return juice;
  }

  console.log(fruitProccessor(4,6));