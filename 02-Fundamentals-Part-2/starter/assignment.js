


// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// console.log(describeCountry("Japan", 6, "Helsinki"));

// //'Finland has 6 million people and its capital city is Helsinki'

// // 1. Contenation
// // 2. functions

// const a = 1;
// const b = 2;

// console.log("The value is " + a + " and the other one is " + b)

// console.log(`The value is ${a} and the other one is ${b}`)


  // Assignment about functions

// function describeCountry(country,population,capitalCity){
//   return `${country} has  ${population} million people and its capitalcity is ${capitalCity}`;
// }
// console.log(describeCountry('Germany', 8,  'Munich'));
// console.log(describeCountry('Uganda', 90, 'kampal'));
// console.log(describeCountry('Japan', 56, 'Tokyo'));


// // Function declaration
// const worldPopulation = 7900;

// function percentageOfWorld1(worldPopulation){
//   return (worldPopulation / 1441) * 100;
// }

//  const uganda = percentageOfWorld1(1900);
 
//  const kenya = percentageOfWorld1(700);
//  const tZ = percentageOfWorld1(280);
//  console.log(uganda,kenya,tZ)

//  // Function Expression

// const percentageOfWorld2 = function (worldPopulation){
//     return (worldPopulation / 1441) * 100;
// }
// const india = percentageOfWorld2(2000);
// const korea = percentageOfWorld2(1234);
// const  taiwan = percentageOfWorld2(2455);




// console.log(india,korea,taiwan)

function describeCountry(country,population,capitalcity){
  return `${country} has ${population} million people and its capitalcity is ${capitalcity} `
}

console.log(describeCountry('Rwanda',8, 'kigali'));

console.log(describeCountry('Burundi',5, 'Bujumbura'));

console.log(describeCountry('Congo',67, 'Kinshassha'));

const worldPopulation = 78999;

function percentageOfWorld1(worldPopulation){
  return (1441 / worldPopulation) * 100;
}

// const Japan = percentageOfWorld1(1888);
const Peru = percentageOfWorld1(2000);
const Brazil = percentageOfWorld1(3879);
// console.log(Japan,Peru,Brazil);

// Function expression

const percentageOfWorld2 = function(worldPopulation){
  return (1441 / worldPopulation) * 100;
}

const qatar = percentageOfWorld2(125);
const dubai = percentageOfWorld2(2873);
const oman = percentageOfWorld2(5674);
console.log(qatar,dubai,oman)

const worldMoney = 102304;

function descibeMoney(worldMoney){
  return (166 / worldMoney) * 100;
}
const sudan = descibeMoney(123);
console.log(sudan)

const world2 = function(worldMoney){
  return (166 / worldMoney) * 100;

}
const cuba = world2(1567)
console. log(cuba)

// Arrow Functions
const percentageOfWorld3 = worldPopulation => (1441 / worldMoney) *100;
const Kuwait = percentageOfWorld3(6788);
console.log(Kuwait);


// functions calling other functions
 
 

function descibePopullation(country,population){
 
  return `${country} has ${population} million people`;


}
console.log(descibePopullation('Japan', 23));
console.log(descibePopullation('China', 67));
console.log(descibePopullation('India',345));

// Arrays

const population = ['Tai','Laos','Malaysia','Taipei'];