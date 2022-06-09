'use strict';
function logger(){
  console.log('My name is Musa')
}

// calling/invoking/ running a function!
logger();

function fruitProccessor (appples, oranges){
  const juice = `Juice with ${appples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProccessor(4,7);
console.log(appleJuice);
 
const appleOrange = fruitProccessor(8,9);
console.log(appleOrange);


  //Function declaration

function calcAge1 (birthYear){
  return 2044 - birthYear ;


  }

  const age1 = calcAge1(1990);
  

  // function Expression

  const calcAge2 = Function(birthYear) {
    return 2044 - birthYear
  }
const age2 = calcAge2(1990);

  
  console.log(age1,age2);