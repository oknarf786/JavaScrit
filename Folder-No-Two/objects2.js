
//var car = {
//   
//    make:"Honda",
//    model:"Civic",
//    year:2000,
//    mileage:[35000,20000,10000],
//    started:false,
//    
//    start: function(){
//       this.started=true;
//    },
//    
//    drive:function(){
//        
//        if(this.started){
//            console.log("I am driving");
//        }else{
//            console.log("I am not driving");
//        }
//    }
//    
//};
//
//console.log(car.make);
//console.log(car.mileage[2]);
//
//car.year=2018;
//console.log(car);
//
//car.color="Red";
//console.log(car);
//
//delete car.color;
//console.log(car);
//
//car.start();
//car.drive();


//var car = {};
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//car.drive=function(){
//    console.log("Driving");
//}
//
//console.log(car);
//
//for(var pr in car){
//    console.log(car[pr]);
//}

//var car = new Object();
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//console.log(car);

//Construction Function
//function ID(name,lastName,age){
//    this.name=name;
//    this.lastName=lastName;
//    this.age=age;
//}
//
//var ID1=new ID("Mike","Smith",45);
//var ID2=new ID("John","Smith",35);
//var ID3=new ID("Ted","Smith",25);
//
//console.log(ID1.name + " " + ID1.age);
//console.log(ID2.name);
//console.log(ID3.name);

//Task
//Create a function construction named Rectangle that accepts 2 parameters: Width and Height
//Constructor should have a method that calculates and returns the area of the rectangle.
//Create different Rectangle objects and find the areas of them.

//function Rectangle(width,height){
//    this.width=width;
//    this.height=height;
//    this.area=function(){
//        return this.width * this.height;
//    }
//}
//
//var r=new Rectangle(10,20);
//console.log(r.area());
//
//var r1=new Rectangle(15,20);
//console.log(r1.area());
//
//var r2=new Rectangle(30,20);
//console.log(r2.area());


///////////////////////////////////////

function Plan(name,price,space,transfer,pages,discountMonths){
    
    this.name=name;
    this.price=price;
    this.space=space;
    this.transfer=transfer;
    this.pages=pages;
    this.discountMonths=discountMonths;
    
    this.calcAnnual=function(percentOfDisc){
        var bestPrice=this.price;
        for(var i=0;i<this.discountMonths.length;i++){
            if(this.discountMonths[i]==7 || this.discountMonths[i]==8 || this.discountMonths[i]==12){
               bestPrice=this.price*percentOfDisc;
                break;
            }
        }
        
        return bestPrice*12;
    }
}


var p1=new Plan("Basic",3.99,100,1000,10,[7,8]);
var p2=new Plan("Professional",5.99,500,5000,50,[7,8,12]);
var p3=new Plan("Ultimate",9.99,2000,20000,500,[7,8]);

var annualPrice1=p1.calcAnnual(0.8);
console.log(annualPrice1);

var annualPrice2=p2.calcAnnual(0.8);
console.log(annualPrice2);


var annualPrice3=p3.calcAnnual(0.8);
console.log(annualPrice3);


var month="July";

var month=["July","August"];


































