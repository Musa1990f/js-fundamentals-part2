'use strict';
function logger(){
  console.log('My name is Musa')
}

// calling/invoking/ running a function!
logger();

function fruitProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges .`;
  return juice;
};

const appleJuice = fruitProcessor(3, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(6, 9);
console.log(appleOrangeJuice);