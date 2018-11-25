/*
 * Question 1:
 * Write a javascript program for following logic.
 *	if marks < 60, then print "Failed"
 *	if marks >= 60 but less than 90 , then print "Passed"
 *	if marks >= 90, then print "Passed with Distinction"
 *
 * This solution uses if-statements only, not a very efficient solution
 * as all the if-statements are checked.
 * 
 */
var marks = 45;
		
if(marks < 60) {
    console.log("Failed");
}

if(marks >= 60 && marks < 90) {
    console.log("Passed");
}

if(marks >= 90) {
    console.log("Passed with Distinction");
}



/*
 * Question 1:
 * Write a javascript program for following logic.
 *	if marks < 60, then print "Failed"
 *	if marks >= 60 but less than 90 , then print "Passed"
 *	if marks >= 90, then print "Passed with Distinction"
 *
 * This solution uses if-else statements only, as few conditions to check
 * hence we can use if-else without increasing the compelxity.
 * 
 */
var marks = 45;
		
if(marks < 60) {
    console.log("Failed");
}else { //else means marks >= 60
    if(marks < 90) { //includes marks >= 60 check
        console.log("Passed");
    }else { //equivalent to marks >= 90
        console.log("Passed with Distinction");
    }
}


/*
 * Question 1:
 * Write a javascript program for following logic.
 *	if marks < 60, then print "Failed"
 *	if marks >= 60 but less than 90 , then print "Passed"
 *	if marks >= 90, then print "Passed with Distinction"
 *
 * This solution uses if, else if and else statements, logic is similar to Ques1_Soln2
 * but it is more readable.
 * 
 */

var marks = 45;
		
if(marks < 60) {
    console.log("Failed");
}else if (marks < 90) { //includes marks >= 60, no need to write it
    console.log("Passed");
} else { //equivalent to marks >= 90
    console.log("Passed with distinction.");
}


/*

Question-2
Login Functionality Logic
   UserName,Password
   --- > Program will ask to enter username and password
   --- > If both username and password are blank
       -- > "UserName and Password Fields cannot be empty"
   --- > If userName is blank and password is not blank
       -- > "UserName cannot be empty"
   --- > If userName is not blank and password is blank
       -- > "Password cannot be empty"
   --- > If the username or password is not valid
       -- > "UserName or password is not valid. Please verify"
   --- > If the username and password are both valid
       -- > "User Logged in successfully"

*/
var Username, Password;
var ActualUsername, ActualPassword;
var ActualUsername = "Test1" 
var ActualPassword = "Test1"

Username=prompt("Please Enter your name");
Password=prompt("Please Enter your Password");

if(Username==="" && Password===""){
    console.log("UserName and Password Fields cannot be empty");
}else if(Username==="" && Password!=""){
    console.log("UserName cannot be empty");
}else if(Username!="" && Password===""){
    console.log("Password cannot be empty");
}else if(Username != ActualUsername || Password!=ActualPassword){
    console.log("UserName or password is not valid. Please verify");
}else if(Username===ActualUsername && Password===ActualPassword){
console.log("User Logged in successfull");
}


/*
Question-3
Calculator Logic with 2 numbers
    User is able to enter 2 numbers
    User is able to enter one of these operators:
        +,-,/,*
    Program needs to perform the operation and display the result
    If either number1 or number2 is blank:
        "Please enter valid numbers"
        
*/

var num1, num2, Operator;

num1=prompt("Please enter first number");
num2=prompt("Please enter second number");
Operator=prompt("Please enter Operator");

if(num1==="" || num2===""){
    console.log("Please enter valid numbers");
}else{
    if(Operator === "+"){
        console.log(num1+num2);
    }else if(Operator === "-"){
        console.log(num1-num2);
    }else if(Operator === "*"){
        console.log(num1*num2);
    }else if(Operator === "/"){
        console.log(num1/num2);
    }else{
        console.log("Invalid Operator");
    }
}

/*

Question-4
Tax Calculator

*/
var income, tax, t1, t2, t3, t4;
income=prompt("Enter your income level");

t1 = 150000000 * 0.25;
t2 = 150000000 * 0.30;
t3 = 300000000 * 0.35;
t4 = 600000000 * 0.40;

if(income <= 150000000){
    tax = income * 0.25;
}else if(income <= 300000000){
    tax = t1 + (income - 150000000) * 0.3;
}else if(income <= 600000000){
    tax = t1 + t2 + (income - 300000000) * 0.35;
}else if(income <= 1200000000){
    tax = t1 + t2 + t3 + (income - 600000000) * 0.4;
}else{
    tax = t1 + t2 + t3 + t4 + (income - 1200000000) * 0.5;
}

console.log("Your income: " + income);
console.log("The tax amount you have to pay: " + tax);

/*

Question-5

Any year is input by the user. Write a program to determine whether the year is a leap year or not.
Leap Years are any year that can be evenly divided by 4.  A year that is evenly divisible by 100 is a leap year only if it is also evenly divisible by 400.

Example : 
1992      Leap Year
2000      Leap Year
1900      NOT a Leap Year

*/

var year=2112;

if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
    console.log("Year " + year + " is a leap year");
}else{
    console.log("Year " + year + " is not a leap year");
}


/*

Question-6

Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls.

*/

var calls;
var bill;
calls=parseInt(prompt("Enter Your Calls"));

if(calls<=100){
    bill=200;
}else if (calls>100 && calls<=150){
  	calls=calls-100;
    bill=200+(0.60*calls);
}else if (calls>150 && calls<=200){
	calls=calls-150;
    bill=200+(0.60*50)+(0.50*calls);
}else{
    calls=calls-200;
    bill=200+(0.60*50)+(0.50*50)+(0.40*calls);
}

console.log("Your bill is $"+bill);


	
