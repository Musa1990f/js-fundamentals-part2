// Test

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2

5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */

// const calcAverage = (a,b,c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function(avgDolhins,avgKoalas){
// if (avgDolhins >= 2 * avgKoalas){
//   console.log(`Dolphins wins the 🏆${avgDolhins} vs. ${avgKoalas}`);
// } else if(avgKoalas >= 2 * avgDolhins){
// console.log(`Koalas win the 🏆${avgKoalas} vs. ${avgDolhins}`);

// } else{
//   console.log('No team wins');
// }
// }
// checkWinner(scoreDolphins,scoreKoalas);
// checkWinner(567, 111);

// // Test2 

// scoreDolphins = calcAverage(85,54,41);
//  scoreKoalas = calcAverage(23,34,27);
//  console.log(scoreDolphins,scoreKoalas);
//  checkWinner(567,876);
//  checkWinner(scoreDolphins,scoreKoalas);

 // Challenge of arrays

/* Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data 
below

3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

// const calcTip = function(bill) {
//    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // 1 ,2,3,4,5

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);


// challenge on objects method

/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK �  */

// - 



const mark = {
  fullName: 'Mark miller',
  mass: 78,
  height: 1.69,
  calcBMI(){
  this.bmi = this.mass / this.height ** 2;
  return this.bmi
  },
  
}

const John = {
 fullName: 'John smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi
  }
};

mark.calcBMI();
John.calcBMI();
console.log(mark.bmi,John.bmi);

if(mark.bmi > John.bmi){
  console.log(`${mark.fullName} 's BMI ${mark.bmi} is higher than ${John.fullName} 's BMI ${John.bmi} `)
}  else if ( John.bmi > mark.bmi) {
  console.log(`${John.fullName} 's BMI ${John.bmi} is higher than ${mark.fullName} 's BMI ${mark.bmi} `)
};

/*Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/
const calcTip = function(bill) {
      bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
   }

const bills = [22,295,176,44037,105,10,1100,86,52];
const tips = [];
const totals = [];


   for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
    
   }
   console.log(bills, tips, totals);

   const calcAverage = Function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      //sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length
   }
   console.log(calcAverage([2,3,6]));
   console.log(calcAverage(totals));
   console.log(calcAverage(tips));