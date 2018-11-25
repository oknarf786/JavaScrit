/*

Question-1
Print following output using nested for loops:
1
22
333
4444
55555
666666
7777777		

*/
for (var i = 1; i <= 7; i++) { //outer loop for 7 rows
    var print="";
    for(var j = 1; j <= i; j++) { //inner loop
        print=print+i;
    }
    console.log(print);
    
}

/*
Question-2

Print following output using nested for loops.

4     3     2     1

   3     2      1

      2      1

         1
*/

for (var i = 1; i <= 4; i++) 
{
    //Printing i spaces at the beginning of each row
    var y="";
    for (var j = 1; j < i; j++) 
    {
        y=y+" ";
    }
             
    //Printing i to rows value at the end of each row
     var x="";
    for (var j = i; j <= 4; j++) 
    { 
        x=x+j+" "; 
    } 
     console.log(y+x);
} 
   

/*

Question-3
Print following output using nested for loops.
1    2    3    4    5    6    7    8    9    10    
2    4    6    8    10    12    14    16    18    20    
3    6    9    12    15    18    21    24    27    30    
4    8    12    16    20    24    28    32    36    40    
5    10    15    20    25    30    35    40    45    50    
6    12    18    24    30    36    42    48    54    60    
7    14    21    28    35    42    49    56    63    70    
8    16    24    32    40    48    56    64    72    80    
9    18    27    36    45    54    63    72    81    90    
10    20    30    40    50    60    70    80    90    100    

NOTE: 
1. 1st row is table of 1, 2nd row is table of 2 and so on.
2. You can use space between the digits on the same row.

*/

for(var i=1;i<=10;i++){
    var str="";
    for(var j=1;j<=10;j++){
        str=str+ (i * j)+" ";
        
    }
    console.log(str);
}


/*

Question-4
Print following chess board using nested for loops.
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W

NOTE: 
1. Total 8 rows and 8 columns.
2. "W" and "B" are in alternate positions (row-wise or column-wise), you will not find consecutive W or B.

*/


for(var i = 1; i <= 8; i++) { //outer loop to print 8 rows
    var print="";
    for(var j = 1; j <= 8; j++) { //inner loop to print 8 columns in each row
        if ((i + j) % 2 != 0) {
            print=print+"B" + " "; //Print B when sum of i + j is odd
        } else {
            print=print+"W" + " "; //Print W when sum of i + j is even
        }
    } //inner for ends
    console.log(print); //New line at the end of each row
} //outer for ends










