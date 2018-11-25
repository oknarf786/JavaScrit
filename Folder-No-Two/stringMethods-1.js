//var string = "Java Script";
//console.log(string.length);


/*
Task:
Declare 2 variables and assign your name and last name. Display in the console total numbers of characters.
*/

//var myName = "Ozzy";
//var lastName = "Can";
//console.log(myName.length + lastName.length);


/*
var x = “Java Script”;

Display each character in the console.
*/

//var x = 'Java Script';
//for(var i=0;i<x.length;i++){
//    console.log(x.charAt(i));
//}

/*
Create a function called passwordCreate(string1,string2). String1 and String2 should be able to entered by user in runtime. 
Password should be first 3 characters of String1 and concat of second strings length.
Display the password in the console.
*/

//var a="";
//var string1="";
//var string2="";
//function passwordCreate(string1,string2){
//    string1=prompt("Enter str1");
//    string2=prompt("Enter str2");
//    
//    for(var i=0;i<string1.length;i++){
//        a=a.concat(string1.charAt(i));
//        if(i==2){
//            break;
//        }
//    }
//  
//    return  a.concat(string2.length);
//}
//
//var password = passwordCreate(string1,string2);
//console.log(password);

/*
Task
Write a function that accepts 2 strings(str1,str2)  and prints the length of the str2 if str2 is existing in str1.If it doesn’t exist, print “not found”

checkedString(“Your order confirmation number is XYZ”,  “confirmation”) - >12
*/

//function checkedString(str1,str2){
//    if(str1.includes(str2)){
//        console.log(str2.length);
//    }else{
//        console.log("not found");
//    }
//}
//
//checkedString("Your order confirmation number is XYZ","confirmation");


//Task
//Write a function that accepts 2 strings(str1,str2)  and prints the position index of the str2 if str2 is existing in str1.If it doesn’t exist, print “not found”
//
//checkedString(“Your order confirmation number is XYZ”,  “confirmation”) 

//function checkedString(str1,str2){
//    if(str1.includes(str2)){
//        console.log(str1.indexOf(str2));
//    }else{
//        console.log("not found");
//    }
//}
//
//checkedString("Your order confirmation number is XYZ","confirmation");

/*
Task
Create 2 string variables and replace first 2 letters of string1 with last 2 letters of string2.
var s1="Orcun";
var s2="Canlilar";
console.log(replaced); //CanlilOr
*/

//var s1="Mike";
//var s2="Smith";
//
//var x1=s1.charAt(0)+s1.charAt(1);  
//var x2=s2.charAt(s2.length-2)+ s2.charAt(s2.length-1);
//var replaced=s2.replace(x2,x1);
//
//console.log(replaced);

/*
Task
var str= “In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.”

Write a program to test if “automation” is present in the string. If found, tell the user it is found. If not, tell user that it is not found.
*/
//
//
//var str= "automation In order to be a good test  developer, I need to practice at least 2 to 3 hours a day.";
//
//var x=str.search("automation");
//console.log(x); //27
//
//if(x>=0){
//    console.log("found it");
//}else{
//    console.log("not found it");
//}

//var str= "Welcome to JavaScript";
//console.log(str.length); //21
//
//console.log(str.slice(2)); //lcome to JavaScript
//console.log(str.slice(10)); //JavaScript
//console.log(str.slice(2,9)); //lcome t
//console.log(str.slice(6,14)); //e to Jav
//
//
//console.log(str.slice(4,-3)); //ome to JavaScr
//console.log(str.slice(4,18)); //ome to JavaScr
//
//console.log(str.slice(5,-12));  //me t
//console.log(str.slice(5,9)); ////me t
//
//console.log(str.slice(2,-12)); //lcome t


/*
Task
var str= “In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.”

Write a program to test if “automation” is present in the string by using slice() method. If found, tell the user it is found. If not, tell user that it is not found.
*/


var str= "In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
var x = str.slice(27,37);
console.log(x);

if(x=="automation"){
    console.log("found it");
}else{
    console.log("not found it");
}














