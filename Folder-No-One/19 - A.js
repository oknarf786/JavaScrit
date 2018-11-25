/*1
Task
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".


frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true


function frontAgain(str){
    var x = str.substring(0,2);
    if(x==str.substring(str.length-2)){
        console.log("true");
    }else{
        console.log("false");
    }
}

frontAgain("edited");
frontAgain("edit");
frontAgain("ed");
*/
/*2
Task
Return the number of times that the string "hi" appears anywhere in the given string.


countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2


function countHi(str){
    var counter=0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)=="h" && str.charAt(i+1)=="i"){
            counter++
        }
    }
    console.log(counter);
}

countHi("abc hi ho");
countHi("ABChi hi");
countHi("hihi");
*/

/*3
Task
Return true if the string "cat" and "dog" appear the same number of times in the given string.


catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true


function catDog(str){
    var counter1=0;
    var counter2=0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)=="c" && str.charAt(i+1)=="a" && str.charAt(i+2)=="t"){
            counter1++;
        }else if(str.charAt(i)=="d" && str.charAt(i+1)=="o" && str.charAt(i+2)=="g"){
            counter2++;
        }
    }
    
    if(counter1==counter2){
        console.log("true");
    }else{
        console.log("false");
    }
}

catDog("catdog");
catDog("catcat");
catDog("1cat1cadodog");
*/
/*4
Task
Given a string, return a string where for every char in the original, there are two chars.


doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"


function doubleChar(str){
    var x="";
    for(var i=0;i<str.length;i++){
        x=x.concat(str.charAt(i)).concat(str.charAt(i));
        
    }
    console.log(x);
}

doubleChar("The");
doubleChar("AAbb");
doubleChar("Hi-There");
*/
/*5
Task
Given a string, return true if it ends in "ly".


endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false


function endsLy(str){
    var x = str.substring(str.length-2);
    if(x=="ly"){
        console.log("true");
    }else{
        console.log("false");
    }
    
}

endsLy("oddly");
endsLy("y");
endsLy("oddy");
*/

/*6
Task
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.


withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""


function withouEnd2(str){
    var x = str.substring(1,str.length-1);
    console.log(x);
}

withouEnd2("Hello");
withouEnd2("abc");
withouEnd2("ab");

*/
/*7
Task
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.


hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false


function hasBad(str){
    if(str.search("bad")==0 || str.search("bad")==1){
        console.log("true");
    }else{
        console.log("false");
    }
}

hasBad("badxx");
hasBad("xbadxx");
hasBad("xxbadxx");
*/
/*8
Task
Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.


atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"


function atFirst(str){
    if(str.length>=2){
        console.log(str.substring(0,2));
    }else{
        console.log(str.charAt(0)+"@");
    }
}

atFirst("hello");
atFirst("hi");
atFirst("h");
*/