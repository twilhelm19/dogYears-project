//Project: Dog Years 

//My age 
const myAge = 32; 

//Changeable variable converting first two human years to dog years
let earlyYears = 2; 
earlyYears *= 10.5; 
console.log(earlyYears); 

//New variable that accounts for the first two years calculation (earlyYears)
let laterYears = myAge - 2; 
console.log(laterYears); 

//Assigned new value to convert to dog years 
laterYears *= 4; 
console.log(laterYears); 

//My full age in dog years accounging for first two years and consecutive 30 year calculations
let myAgeInDogYears = earlyYears + laterYears; 

console.log(myAgeInDogYears); 

//Create variable myName that will return in all lowercase
const myName = 'Tina'.toLowerCase(); 
console.log(myName); 

console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); 
