        
function Car(make,model,year,mileage,level,tank){
    this.make=make;
    this.model=model;
    this.year=year;
    this.mileage=mileage;
    this.level=level;
    this.tank=tank;
    
    this.averageMileageCalculate=function(){
        var sum=0;
        for(var i=0;i<this.mileage.length;i++){
            sum=sum+this.mileage[i];
        }
        return sum/this.mileage.length;
    }
    
    this.calcConsuming=function(){
        if(this.averageMileageCalculate()>0 && this.averageMileageCalculate()<=500){
            return this.tank*1.1;
        }else if(this.averageMileageCalculate()>500 && this.averageMileageCalculate()<=1000){
            return this.tank*1.2;
        }else if(this.averageMileageCalculate()>1000 && this.averageMileageCalculate()<=5000){
            return this.tank*1.3;
        }else if(this.averageMileageCalculate()>5000 && this.averageMileageCalculate()<=10000){
            return this.tank*1.4;
        }else{
            return this.tank*1.5;
        }
    }
    
    this.priceCalc=function(){
        if(this.year==2018){
            return this.level.super*this.calcConsuming();
        }else if(this.year<2018 && this.year>=2010){
            return this.level.premium*this.calcConsuming();
        }else if(this.year<2010 && this.year>=2000){
            return this.level.regular*this.calcConsuming();
        }
    }
    
        
        
    }
    



var max=parseInt(prompt("Enter max mileage"));
var min=parseInt(prompt("Enter min mileage"));
var arr=[];
for(var i=0;i<4;i++){
    arr[i]=Math.floor(Math.random()*(max-min+1)+min);
}

var regular=parseInt(prompt("what is the regular price?"));
var premium=parseInt(prompt("what is the premium price?"));
var supper=parseInt(prompt("what is the super price?"));



var car1=new Car("Honda","Civic",2018,arr,{"regular":regular,"premium":premium,"super":supper},40);
var price=car1.priceCalc();
console.log(price);
















