/*

Question-1 

Write a program to convert gallons into Liters and display it.

1 gal = 3.78541

*/
var myGallon, myLiter;
myGallon = prompt("Please enter in gallons for conversion");
myLiter = myGallon * 3.78541;
console.log(myGallon + " gallons = " + myLiter + " liters");


/*

Question-2  

Declare a variable MyFruit and assign your favorite fruit into it and display as follows:

            “My Fav Fruit is My Fruit”
            
*/
var myFruitName;
myFruitName = prompt ("Please enter a name of your favorite fruit ");
console.log("My Favorite Fruit is " + myFruitName + "! ");



/*

Question-3

Write a program - > Let user enter his name and birth year, and program will display:

     " Hello Ozzy ! Based on your input, your age is 15 :) "  
     
*/
var myName, birthYear, myAge;
myName = prompt ("Please enter your name ");
birthYear = prompt ("Please enter a year of your birthday");
myAge = 2018-birthYear;
console.log("Hello " + myName + " ! " + "Based on your input, your age is " + myAge + " :)");

/*


Question-4

How can you find if a number is odd or even in javascript. Please give an example/write syntax

*/

/*We can use Modulus operator to find whether the number is odd or even because Odd number will have remainder of '1' when it is divided by 2. Even number will have remainder of '0' when it is divided by 2*/
var myNumber;
myNumber = prompt("Please enter a number to verify whether the number is even or odd");
console.log(myNumber % 2); 