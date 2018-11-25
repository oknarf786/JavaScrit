/*

Question 1:

Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd.

*/
var number = prompt("Enter your number");

switch(number%2){
    case 0:
        console.log("Your Number: " + number + " is even number");
        break;
    case 1:
        console.log("Your Number: " + number + " is odd number");
}

/*

Question 2:

Write a switch-case program that accepts a number from user.

IF number is 0,1 or 2 print "Low Number. IF number is 3,4,5 print "Medium Number". IF number is is not between 0-5 then print "Other Number"

*/
var number = prompt("Enter your number");

switch(number){
    case "0":
    case "1":
    case "2":
        console.log("Low Number");
        break;
    case "3":
    case "4":
    case "5":
        console.log("Medium Number");
        break;
    default:
        console.log("Other Number");
        break;
        
}


/*

Question 3:

Write a switch-case program that accepts the total cost of shopping from user and apply discount ratio according the below table. Print the total amount that user needs to pay after discount

*/

var totalCost = prompt("Enter your total cost");
totalCost = parseInt(totalCost);

switch(totalCost){
    case 1000:
        totalCost = 0.95 * totalCost;
        break;
    case 10000:
        totalCost = 0.92 * totalCost;
        break;
    default:
        totalCost = 1 * totalCost;
        break;
        
}

console.log("You have to pay : $" + totalCost);











