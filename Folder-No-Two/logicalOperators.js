
//Logical AND
console.log(true&&true);
console.log(true&&false);
console.log(true&&(3==4));

//Logical OR
console.log(true||true);
console.log(false||true);
console.log(false||(3==4));

var applesCount=20;
var orangesCount=30;
var pearsCount=30;

var comp = applesCount<orangesCount || orangesCount>=pearsCount;

console.log(comp);


var b=2;
var res = ++b == 2 || --b == 2 && --b == 2;

console.log(res);

//b     : 2 -> 3 -> 2 -> 1

// res  : 3 == 2 || 2 == 2 && 1 == 2
//        false || (true && false)
//        false || false
//        false

var x=true,z=true;
var y=10;

x = (y!=10) || (z=false);
console.log(z);















