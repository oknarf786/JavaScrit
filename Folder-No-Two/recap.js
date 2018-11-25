//1
/*PseudoCode
	declare 3 variables
	assign value to them
	concatenate text and variables
	print to screen
*/
/*
var firstName="Mike";
var lastName="Smith";
var salary="100k";

console.log("Hi,My name is " + firstName + " " +lastName + " and my salary is " + salary);
*/
//2

/*PseudoCode
	declare 2 variables
	assign values to them
	ask a value from a user(prompt)
	concatenate text and variables (calculation)
	print to screen*/
/*
var hourlyRate,hours,sum;
hourlyRate=70;
hours=prompt("How many hours did you work today?");
hours=parseInt(hours);
sum=hourlyRate*hours;
console.log("you worked 70 hours this week and you made " + sum + "$");

*/
/*
var num1, num2, num3, num4, average;

num1=prompt(" Enter the First Number ");
num1=parseInt(num1);
num2=prompt(" Enter the Second Number ");
num2=parseInt(num2);
num3=prompt(" Enter the Third Number ");
num3=parseInt(num3);
num4=prompt(" Enter the Forth Number ");
num4=parseInt(num4);
average=(num1+num2+num3+num4)/4;

    
console.log(" The average of Your Numbers are" + average);

*/
/*
var number , tinputNumber, numberType;
number=parseInt(prompt("Enter any random number!"));
tinputNumber=number%2;
if (tinputNumber==0){
   numberType="even";
}
else {
   numberType="odd"
}
console.log("Your random  number is "+numberType+" !");
*/
/*
var num1=parseInt(prompt("Enter a number"));
var num2=parseInt(prompt("Enter a number"));

if (num1==num2) 
{
    console.log("Number1 and number2 are equal");
} else 
{
    console.log("Number1 and number2 are NOT equal");
}
*/
/*
var score;
score=parseInt(prompt("Enter your score:"));

if(score>100 || score<0){
    console.log("out of range");
}
    
else if(score>=90) {
    console.log("You got A");
    
}else if(score>=80) {
    console.log("You got B");
    
}else if(score>=70) {
    console.log("You got C");
    
}
    
else{
    console.log("You got F");
}

*/
/*
var productPrice = parseInt(prompt("Enter the product price"));
var quantity = parseInt(prompt("Enter quantity"));
var revenue = productPrice*quantity;
var discount, netRevenue;
if (revenue<3000){
    console.log("Your revenue is " + netRevenue + ". You do not have any discount.");
}else if(revenue>=3000 && revenue<5000){
    discount = revenue*0.15;
    netRevenue = revenue-discount;
    console.log ("Your revenue is $" + netRevenue + ". Your discount is $" + discount);
}else if(revenue>=5000 && revenue<10000){
    discount = revenue*0.25;
    netRevenue = revenue-discount;
    console.log ("Your revenue is $" + netRevenue + ". Your discount is $" + discount);
}else if(revenue>=10000){
    discount = revenue*0.40;
    netRevenue = revenue-discount;
    console.log ("Your revenue is $" + netRevenue + ". Your discount is $" + discount);
}else{
    console.log("Enter valid information");
}
*/
/*
var carModel = prompt("Please enter a car model");
switch(carModel) {
     case "toyota" :
          console.log("good for uber");
          break;
      case "honda" :
          console.log("good for race");
          break;
      case "mercedes" :
          console.log("good for luxury");
          break;
      default:
          console.log("do not buy that one!");     
}

*/

for(var i=0; i<20; i++){
console.log("I will find $100K job in 5 months" + i);
}










