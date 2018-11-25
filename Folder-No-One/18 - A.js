/*1
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".


helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"


function  helloName(str){
    console.log("hello ".concat(str));
}

helloName("Bob");
helloName("Alice");
helloName("X");

*/

/*2
Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".


makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"


function makeAbba(str1,str2){
    var x = str1.concat(str2).concat(str2).concat(str1);
    console.log(x);
}

makeAbba("Hi", "Bye");
makeAbba("Yo", "Alice");
makeAbba("What", "Up");
*/


/*3
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.


extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"


function extraEnd(str){
    var len=str.length;
    var x = str.substring(len-2,len); 
    console.log(x.concat(x).concat(x));
}

extraEnd("Hello");
extraEnd("ab");
extraEnd("Hi");
*/

/*4
Task
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.


firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"


function firstTwo(str){
    if(str.length<2){
        console.log(str);
    }else if(str==""){
        console.log("");
    }else{
        console.log(str.substring(0,2));
    }
}

firstTwo("Hello");
firstTwo("abcdefg");
firstTwo("ab");
*/

/*5
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".


firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"


function firstHalf(str){
    var x = str.length/2;
    console.log(str.substring(0,x));
}

firstHalf("WooHoo");
firstHalf("HelloThere");
firstHalf("abcdef");

*/

/*6
Task
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.


withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"


function withoutEnd(str){
    if(str.length>=2){
        console.log(str.substring(1, str.length-1));
    }
}

withoutEnd("Hello");
withoutEnd("java");
withoutEnd("coding");
*/

/*7
Task
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"


function comboString(str1,str2){
    if(str1.length>str2.length){
         console.log(str2+str1+str2);
    }else{
        console.log(str1+str2+str1);
    }
}

comboString("Hello", "hi");
comboString("hi", "Hello");
comboString("aaa", "b");
*/

/*8
Task
Given 2 strings, return their concatenation, except omit the first char of each.


nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"


function nonStart(str1,str2){
    var x = str1.substring(1)+str2.substring(1);
    console.log(x);
}

nonStart("Hello", "There");
nonStart("java", "code");
nonStart("shotl", "java");
*/


/*9
Task
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.


left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"


function left2(str){
    console.log((str.substring(2) + str.substring(0, 2)));
}

left2("Hello");
left2("java");
left2("Hi");

*/

/*10
Task
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.


right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"


function right2(str){
    var len = str.length-2;
	console.log(str.substring(len) + str.substring(0, len));

}

right2("Hello");
right2("java");
right2("Hi");

*/
