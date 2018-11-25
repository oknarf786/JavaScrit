/*

Question-1
Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.

*/
//var i=5;
//while(--i>=0){
//    console.log("Hello");
//}

/*

Question-2
Write a program to calculate the sum of the numbers from 1 till upper bound. 
If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.

You should use while loop


*/
//var upperBound =parseInt(prompt("Enter you upperBound"));
//var ctr = 1;//Sum should start with 1 till upperBound
//var sum = 0;//Variable to store sum of the numbers
//while (ctr <= upperBound) {
//    sum += ctr;
//    ctr++;
//}
//console.log("Sum of the numbers from 1 to " + upperBound + " is: " + sum);


/*

Question-3
Write a program using while loop to print Even numbers from 1 to 100.

*/

//var start = 1;
//var end = 100;
//while (start <= end) {
//if(start % 2 == 0) {
//    console.log(start);
//}
//    start++;
//}

/*

Question-4
Write a program for following logic:
Print all the odd numbers in comma separated form from 1 till end (you may change it):
if end = 10, OUTPUT = 1, 3, 5, 7, 9
if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11

You should use while loop and if - else statements. Note that, there should not be any comma after last digit.

*/

var start = 1;
var end = parseInt(prompt("Enter your end number"));
var print="";
		
while (start <= end) {
    if(start % 2 != 0){
        print=print+start;
        //Logic to add comma
        if(end % 2 == 0){ //If end is an even number
            if(start != (end - 1)) { //check to not add , after printing last number
				print=print+", ";
            }
        } else { //If end is an odd number
				if(start != end) { //check to not add , after printing last number
				    print=print+", ";
				}
        }
    }
    start++;
}

console.log(print);














