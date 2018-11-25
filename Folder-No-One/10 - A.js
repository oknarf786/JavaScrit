/*

Question 1:

Write a JavaScript Program to store numbers from 1 to 1000 in One-dimensional array and then print array contents as follows (10 elements per row): 
1    2    3    4    5    6    7    8    9    10    
11    12    13    14    15    16    17    18    19    20    
21    22    23    24    25    26    27    28    29    30    
.
.
.
991    992    993    994    995    996    997    998    999    1000 

*/
var myArray=[];
var str="";

for(var i=0;i<1000;i++){
    myArray[i]=i;
}

for(var j=1;j<=myArray.length;j++){
    if(j%10==0){
        str=str+j+"\n";
    }else{
        str=str+j+" ";
    }
    
}
console.log(str);


/*

Question 2:
Write a JavaScript program to store numbers 1 to 10 in an array using data instantiation.
Then write a for loop to multiply each member of above array by 19, this way you will get table of 19 stored in the above array.
Finally write another for loop to print all the array elements.
You should get following output:
19
38
57
76
95
114
133
152
171
190

*/

var myArray=[];
for(var i=0;i<=10;i++){
    myArray[i]=i;
}

for(var j=1;j<myArray.length;j++){
    myArray[j]=19*j;
}

for(var z=1;z<myArray.length;z++){
    console.log(myArray[z]);
}

/*

Question 3:
Below is One-dimensional array code:
 var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];

Write the code to search for particular character in above array.
If I search for 'B', then output should be: "B found!"
If I search for 'E', then output should be: "E Not found!"

*/

var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
var search = "B";
found=false;

for(var i=0;i<arr.length;i++){
    if(arr[i]==search){
        found=true;
        break;
     }
 }

if(found){
    console.log(search + " found");
}else{
    console.log(search + " not found");
}


/*

Question 4:
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
Above array stores the scores of a batsman in his last 10 innings in the game of cricket.
If score is greater than or equal to 50 but less than 100, it is regarded as half-century.
If score is greater than or equal to 100 but less than 200, it is regarded as a century.
If score is greater than or equal to 200, it is regarded as a double-century.


NOTE: No scenario of triple-century in this case.

Write the code to print the number of half-centuries, centuries and double-centuries scored by the batsman.

*/
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];

var halfCenturies=0;
var centuries=0;
var doubleCenturies=0;

		
//for loop to iterate through all the array elements.
for(var i = 0; i < scores.length; i++) {
    //NOTE: Your logic may be different from mine but output should not differ.
    if(scores[i] >= 200) { //if score is greater than or equals to 200
        doubleCenturies++ //Same as results[2] = results[2] + 1;
    } else if (scores[i] >= 100) { //if score is greater than or equals to 100
        centuries++;
    } else if (scores[i] >= 50) { //if score is greater than or equals to 50
        halfCenturies++
    }
}
		
console.log("Half-centuries scored by the batsman: " + halfCenturies);
console.log("Centuries scored by the batsman: " + centuries);
console.log("Double-centuries scored by the batsman: " + doubleCenturies);


/*

Question 5:
In mathematics, the Fibonacci series are the numbers in the following integer sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.

Write a JavaScript Program to generate above series till n number of times (For example you can try with 
n = 10 and n = 15) and store it in One-dimensional array.
For n = 10, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
For n = 15, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377

Write a for loop to print all the elements of the array.

*/
var count = 12; 
var str="";

var fib = new Array(count); //Array to store the series
fib[0] = 0; //First member of the series is always 0
fib[1] = 1; //Second member of the series is always 1

// Store the values in fib array
for (var i = 2; i < count; i++) { 
    fib[i] = fib[i - 1] + fib[i - 2]; //next number is always the sum of previous two numbers
}

// Print the values from fib array
for (var i = 0; i < fib.length; i++) {
    if(i==fib.length-1){
       str=str+fib[i];
    }else{
        str=str+fib[i] +",";
    }
}
console.log(str);







