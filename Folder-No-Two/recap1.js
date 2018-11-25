

/*
QUESTION-1

Declare 3 variables:
Ask user to enter his/her first name and assign it to variable1
Ask user to enter his/her last name and assign it to variable2
Ask user to enter his/her age and assign it variable3

And write a code to print :

       Hi, my name is Mike Smith, and my age is 20. Nice to meet you !


var var1,var2,var3;

var1 = prompt("Enter your first name");
var2 = prompt("Enter your last name");
var3 = prompt("Enter your age");

console.log("Hi, my name is " + var1 + " " + var2 + " ,and my age is " + var3 + ". Nice to meet you !");

*/

/*
QUESTION-2
Create a program that ask users to enter the radius of circle (r) and calculate the area

      Area = PI * r * r
      PI= 3.14

      Sample Output :  Your circle radius is 6 and the area of the circle is 113.1


var r,area,pi;

pi=3.14;
r = prompt("Enter your radius");
r=parseInt(r);
area = pi * r * r;

console.log( "Your circle radius is " + r + " and the area of the circle is " + area);
*/

/*
QUESTION-3
Write a program that let 2 users to enter their hourly wage and the amount of hours they worked for this week. 
And print which user earned more money.

output:  user_1 earning is more than user_2: true/false


user_1  $10 * 40 =400
user_2  $20 * 100 =2000



var user_1_totalAmountEarned, user_2_totalAmountEarned, user_1w, user_2w, user_1h, user_2h;
user_1h=parseInt(prompt("How many hours did you work?"));
user_2h=parseInt(prompt("How many hours did you work?"));
user_1w=parseInt(prompt("How much per hour do you get?"));
user_2w=parseInt(prompt("How much per hour do you get?"));
user_1_totalAmountEarned = user_1h * user_1w;
user_2_totalAmountEarned = user_2h * user_2w;
var bool = user_1_totalAmountEarned>user_2_totalAmountEarned;

console.log("user_1 earning is more than user_2 " + bool);

console.log("user_1 earning is more than user_2 " +(user_1_totalAmountEarned>user_2_totalAmountEarned));

*/













