/*

Question-1

Print the table of 12 using for loop.
Output should be in following format:
12 X 1 = 12
12 X 2 = 24
12 X 3 = 36
12 X 4 = 48
12 X 5 = 60
12 X 6 = 72
12 X 7 = 84
12 X 8 = 96
12 X 9 = 108
12 X 10 = 120

*/
var tableOf = 12;
//table starts with 1 and should continue till 10.
for(var i = 1; i <= 10; i++) {
    console.log(tableOf + " X " + i + " = " + tableOf * i);
}

/*

Question-2
Write a program to print Fibonacci series of n terms where n is input by user : 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34,......

*/

//var count = parseInt(prompt("Enter your term")); 
//var num1 = 0, num2 = 1;
//var print="";
//console.log("Fibonacci Series of "+count+" numbers:");
//
//for (var i = 1; i <= count; ++i){
//    print=print+num1+" ";
///* On each iteration, we are assigning second number
// * to the first number and assigning the sum of last two
// * numbers to the second number
//*/
//    var sumOfPrevTwo = num1 + num2;
//    num1 = num2;
//    num2 = sumOfPrevTwo;
//}
//console.log(print);


/*

Question-3
Write a JavaScript program to print all the numbers between 1 and 100 (including 1 and 100)
which are divisible by 5.

*/

//Check all the numbers between 1 and 100.
for(var i = 1; i <= 100; i++) {
   if(i % 5 == 0){ //For numbers divisible by 5, i % 5 == 0.
      console.log(i);
   }
}

/*

Question-4

Print the multiples of 5 starting from 200 to 5 with following restrictions:
1. Use for loop
2. Don't use modulus (%) operator to check whether number is divisible by 5 or not.


*/

for(var i = 200; i >= 5; i=i-5) {
    console.log(i);
}


