/*
Question-1

Write a JS program to print the following pattern

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
for (var i = 1; i <= 7; i++){
    var str="";
    for (var j = 1; j <= i; j++){ 
        str=str+j+" ";
    } 
    console.log(str);
}

//Printing lower half of the pattern 
for (var i = 6; i >= 1; i--){
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}


/*
Question-2

Write a JS program to print the following pattern

1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
*/

//Printing upper half of the pattern
for (var i = 7; i >= 1; i--){
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}
         
//Printing lower half of the pattern
for (var i = 2; i <= 7; i++) {
    var str="";
    for (var j = 1; j <= i; j++){
        str=str+j+" ";
    }
    console.log(str);
}

/*
Question-3

Write a JS program to print the following pattern

1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7
*/

//Printing upper half of the pattern
for (var i = 1; i <= 7; i++){
    var str="";
    //Printing i spaces at the beginning of each row
    for (var j = 1; j < i; j++){
        str=str+" ";
    }
    //Printing i to rows value at the end of each row
    for (var j = i; j <= 7; j++){ 
        str=str+j+" "; 
    } 
    console.log(str);
} 
         
//Printing lower half of the pattern 
for (var i = 6; i >= 1; i--){
    var str="";
    //Printing i spaces at the beginning of each row
    for (var j = 1; j < i; j++){
        str=str+" ";
    }
    //Printing i to rows value at the end of each row
    for (var j = i; j <= 7; j++){
        str=str+j+" ";
    }
    console.log(str);
}

/*
Question-4
Write a JS program to print the following pattern

1
10
101
1010
10101
101010
1010101
*/
for(var i=1;i<9;i++){
    var str="";
    for(var j=1;j<i;j++){
        if(j%2==1){
        str=str+1+" ";
        }else{
          str=str+0+" ";  
        }
    }
    console.log(str);
}

/*
Question-5
Write a JS program to print the following pattern

1111111
1111122
1111333
1114444
1155555
1666666
7777777
*/
var row=7;
for (var i = 1; i <= 7; i++){
    var str="";
    for (var j = 1; j <= row-i; j++){
        str=str+"1";
    }
    for (var j = 1; j <= i; j++){
        str=str+i;
    }
    console.log(str);
}


/*
Question-6
Write a JS program to print the following pattern

1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
*/
var row=5;
for (var i = 1; i <= row; i++){
    var str="";
    var num = i;
    for (var j = 1; j <= i; j++){
        str=str+num+" ";
        num = num+row-j;
    }
    console.log(str);
}








