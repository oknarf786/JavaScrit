//console.log("javascript");
//console.log("javascript");
//console.log("javascript");
//console.log("javascript");
//console.log("javascript");

/*
for(var i=0;i<5;i++){
    console.log("javascript");
}

//  i     t/f     print     
//  0      t        js
//  1      t        js
//  2      t        js
//  3      t        js
//  4      t        js
//  5      f        ------
*/

/*
for(var i=1;i<=10;i+=2){
    console.log(i)
}

//  i   t/f    print   increase
//  1   t       1        1+2
//  3   t       3        3+2
//  5   t       5        5+2
//  7   t       7        7+2
//  9   t       9        9+2
//  11  f      -----------------=
*/

//Task

//print all numbers between 0 and 50 that are divisible by 4 

//for(var i=1; i<=50;i++){
//   if(i%4==0){
//       console.log(i);
//   }
//    
//}

// i    t/f   print increment
// 1     t     --     1+1
// 2     t     ---    2+1
// 3     t     ---    3+1
// 4     t      4     4+1
//5




/*
for(var i=0;i<=50;i+=4){
    console.log(i);
}
*/

//print number 100 to 80 that are divisible by 3

//for(var i=100;i>80;i--){
//    if(i%3==0){
//        console.log(i + " : is divisible by 3");
//    }else{
//        console.log(i + " : is not divisible by 3");
//    }
//}

/*
Task:

User should be able to enter 2 values and program should display which number is largest.
if numbers are equal, it should display numbers are equal 
Above steps need to repeated to number of times that is also inputted by user.

*/

//var rep = prompt("How many times do you want me to repeat?")
//rep=parseInt(rep);
//
//for(var i=0;i<rep;i++){
//    
//    var num1=prompt("Enter your first number");
//    num1=parseInt(num1);
//    var num2=prompt("Enter your second number");
//    num2=parseInt(num2);
//
//    if(num1>num2){
//        console.log(num1 + " is greater than " + num2);
//    }else if(num2>num1){
//        console.log(num2 + " is greater than " + num1);
//    }else{
//        console.log(num1 + " is equal to " + num2);
//    }
//    
//}

//Task

//Write a program that displays each even/odd number in popup between 1 and 32

//for(var i=1;i<32;i++){
//    if(i%2==0){
//        console.log(i + "even");
//    }else{
//        console.log(i + "odd");
//    }
//}

/*
Let user to enter 5 numbers and print the total of those numbers


var total=0;
for(var i=0;i<3;i++){
     var num=parseInt(prompt("Enter your num"));
     total=total+num;
    
}

 console.log(total);
 
 */

/*

Write a program that prompts the user to input a positive integer. It should then print the multiplication table of that number.

*/

var num = prompt("Enter your number");
num = parseInt(num);

for(var i=1;i<10;i++){
    console.log(num + "*" + i + "=" + (num*i));
}





                                      



































