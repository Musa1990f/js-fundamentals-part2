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

// function describeCountry(country, population, capitalcity) {
//   return `${country} has ${population} million people and its capitalcity is ${capitalcity} `;
// }

// console.log(describeCountry("Rwanda", 8, "kigali"));

// console.log(describeCountry("Burundi", 5, "Bujumbura"));

// console.log(describeCountry("Congo", 67, "Kinshassha"));

// const worldPopulation = 78999;

// function percentageOfWorld1(worldPopulation) {
//   return (1441 / worldPopulation) * 100;
// }

// // const Japan = percentageOfWorld1(1888);
// const Peru = percentageOfWorld1(2000);
// const Brazil = percentageOfWorld1(3879);
// // console.log(Japan,Peru,Brazil);

// // Function expression

// const percentageOfWorld2 = function (worldPopulation) {
//   return (1441 / worldPopulation) * 100;
// };

// const qatar = percentageOfWorld2(125);
// const dubai = percentageOfWorld2(2873);
// const oman = percentageOfWorld2(5674);
// console.log(qatar, dubai, oman);

// const worldMoney = 102304;

// function descibeMoney(worldMoney) {
//   return (166 / worldMoney) * 100;
// }
// const sudan = describeMoney(123);
// console.log(sudan);

// const world2 = function (worldMoney) {
//   return (166 / worldMoney) * 100;
// };
// const cuba = world2(1567);
// console.log(cuba);

// // Arrow Functions
// const percentageOfWorld3 = (worldPopulation) => (1441 / worldMoney) * 100;
// const Kuwait = percentageOfWorld3(6788);
// console.log(Kuwait);

// // functions calling other functions

// function describePopulation(country, population) {
//   return `${country} has ${population} million people`;
// }
// console.log(describePopulation("Japan", 23));
// console.log(describePopulation("China", 67));
// console.log(describePopulation("India", 345));

// // Arrays

// const population = ["Tai", "Laos", "Malaysia", "Taipei"];
// console.log(population.length);

// const percentageOfWorld = function (worldPopulation) {
//   return (1441 / worldPopulation) * 100;
// };

// const percentages = [234, 456, 344, 231];
// const world = percentageOfWorld(percentages[0]);
// const world5 = percentageOfWorld(percentages[1]);
// const world6 = percentageOfWorld(percentages[2]);
// const world7 = percentageOfWorld(percentages[percentages.length - 1]);
// console.log(percentages);

// // Array methods

// const neighbors = ["Germany", "Poland", "Sweden"];
// neighbors.push("Utopia");
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// if (neighbors.includes("Germany")) {
//   console.log("Probably not a central European country:D");
// }

// neighbors.indexOf("Sweden");
// neighbors.unshift("Republic of Sweden");
// console.log(neighbors);

// // Objects

// /*1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbors' (an array like we used in previous assignments) */

// const myCountry = {
//   country: "Finland",
//   capital: "Helsinki",
//   language: "finnish",
//   population: 6,
//   neighbors: [],
//   describe: function () {
//     //console.log(this);
//     return `====> ${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries, a capital called ${this.capital} `;
//   },
// };

// console.log(myCountry.describe());

/*1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'

2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation*/

// console.log(`${muCountry.country} has ${muCountry.population} million ${muCountry.language}-speaking people,${muCountry.neighbours.length} neighbouring countries  a capital called ${muCountry.capital}`);

// muCountry.population = 8;
// console.log(muCountry);

// muCountry['population'] = 6;
// console.log(muCountry);

// Object method assignment!!

/*
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.  

2. Call the 'describe' method

3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property */


// # Iteration: for loop!

// 1. There are elections in your country! In a small town, there are only 50 voters. 
// Use a for loop to simulate the 50 people voting, by logging a string like this to 
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'


const spain = [50];

for(let voter = 1; voter <= 50; voter++){
  console.log(`Voter number ${spain} is currently voting `);
}

// #2
/*
1. Let's bring back the 'populations' array from a previous assignment

2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier

3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is */

  //  const populations = [234, 456, 344, 231];
  //  const percentages2 = [];
  //  for(let i = 0; i < populations.length; i++){
  //   const perc = percentageOfWorld1(populations[i]);
  //   percentages2.push(perc);
  //  }

  //  console.log(percentages2)

 // #3
 /*
 Store this array of arrays into a variable called 'listOfNeighbors'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];

2. Log only the neighboring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbor: Canada' for each country

3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway  */

// const listOfNeighbors = [['Canada', 'Mexico'],['Spain'],['Norway','Sweden','Russia']];


// for(let i = 0; i < listOfNeighbors.length; i++);
//   for(let y = 0; y < listOfNeighbors[y].length; y++);


//   console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
  

 