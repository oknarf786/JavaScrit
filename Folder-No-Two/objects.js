//var plan1Name="Basic";
//var plan1Price=3.99;
//var plan1Space=100;
//var plan1Data=1000;
//var plan1Pages=10;
//
//var plan2Name="Professional";
//var plan2Price=5.99;
//var plan2Space=500;
//var plan2Data=5000;
//var plan2Pages=50;
//
//var plan3Name="Ultimate";
//var plan3Price=9.99;
//var plan3Space=2000;
//var plan3Data=20000;
//var plan3Pages=500;
//
//console.log("The cost of the " + plan2Name + " package is $" + plan2Price + " per month.");

//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10
//};
//
//console.log("The cost of the " + plan1.name + " package is $" + plan1.price + " per month.");

//Task
//Check if the mileage is less than 5000 and make is Fiat. If it is, display “buy it” otherwise display “do not buy it”
//var car = {
//    make: "Fiat",
//    model: 500,
//    year: 1957,
//    color: "Medium Blue",
//    passengers: 2,
//    convertible: false,
//    mileage: 8800
//};
//
//if(car.mileage<5000 && car.make=="Fiat"){
//    console.log("Buy it");
//}else{
//    console.log("Do not buy");
//}

//How to add a property?
//If the current month is July,August,or December. the customer gets a 20 percent discount on the hosting plan.

//plan1.discountMonths=[7,8,12];
//plan1.price=4.99;
//delete plan1.data;
//
//console.log(plan1);
//
//console.log("name" in plan1);

//Task
//Check if John’s salary is less than or equal to 100. if it is increase it to 120. Also, check if Adam salary is included. If not, add his new salary too.
//var salaries = {
//    john: 100,
//    Ann: 160,
//    Pete: 130
//};
//
//if(salaries.john<=100){
//    salaries.john=120;
//}
//
//if("Adam" in salaries==false){
//    salaries.Adam=150;
//}
//
//console.log(salaries);

//Task
//Display “My Honda Engine Size is 2.2 and hp is 500”

//var myHonda = {
//    color:"red",
//    wheels:4,
//    engine:{
//        cylinders:4,
//        size:2.2
//    },
//    hp:[300,500,100]
//};
//
//console.log("My honda Engine size is " + myHonda.engine.size + " and hp is " + myHonda.hp[1]);


//if user signs up in certain months,he gets discount for the entire year
//if user signs up for the basic plan in July, or August he gets 20 percent off



//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10,
//    discountMonths:[7,8,12],
//    calcAnnual:function(percentDisc){
//        var bestPrice=plan1.price;
//        for(var i=0;i<plan1.discountMonths.length;i++){
//            if(plan1.discountMonths[i]==7 || plan1.discountMonths[i]==8){
//                bestPrice=plan1.price*percentDisc;
//            }
//        }
//        return bestPrice*12;
//    }
//};
//
//
//var annualPrice=plan1.calcAnnual(0.85);
//console.log(annualPrice);



//var song = {
//    name: "Walk This Way",
//    artist: "Run-D.M.C",
//    minutes: 4,
//    seconds: 3,
//    genre: "80s",
//    playing: false,
//    play: function () {
//        if (!this.playing) {
//            this.playing = true;
//            console.log("Playing " + this.name + "by " + this.artist);
//        }
//    },
//    pause: function () {
//        if (this.playing) {
//            this.playing = false;
//        }
//    }
//}
//
//song.play();
//song.pause();

//Task
//Create an object includes following properties and methods: • name(string)
//• lastName(string)
//• yearOfBirth(number) • job(string)
//• isMarried(Boolean)
//• family(array)
//• calculateAge(function)
//Output : console.log(objectName.calculateAge()) ;

//var p1= {
//  name:"Mike",
//  lastName:"Smith",
//  yearOfBirth:1990,
//  job:"tester",
//  isMarried:true,
//  family:["Bob","John","Emily"],
//  calculateAge:function(){
//      var age=2018-this.yearOfBirth;
//      //return age;
//      console.log(age);
//  }
//};
//
////var MikeAge=p1.calculateAge();
////console.log(MikeAge);
//
//p1.calculateAge();

//Task
//Write a program to display in the console 123 var object1 = {a: 1, b: 2, c: 3};

var object1 = {a: 1, b: 2, c: 3};
var str="";
for(var x in object1){
   str=str + object1[x];
}
console.log(str);
















