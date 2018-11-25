/*You are in the market to buy a car and visited a dealer
1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.*/

const dealer = [
{make:"Honda",model:"Civic",year:2000,mileage:300,state:"VA"},
{make:"Honda",model:"Odyssey",year:2011,mileage:100,state:"VA"},
{make:"Honda",model:"Pilot",year:2018,mileage:20,state:"MD"},
{make:"Honda",model:"CRV",year:2008,mileage:90,state:"VA"},
{make:"Honda",model:"Civic",year:2015,mileage:40,state:"VA"},
{make:"Honda",model:"Civic",year:2015,mileage:50,state:"MD"},
];


//2- create a function that checks if the car state is VA
let carSelector = function (data, callback){
    for (let x of data) {
        if (x.state.toLowerCase() == "va") {
            if (typeof callback == "function") {
                callback(x);
            }
        }
    }
}
//3- print all the cars where the year is more than 2010 that belongs to va

//4- print total mileage of the cars that belongs to va 
let total = 0;
let count = 0;
carSelector (dealer,function (x) {
    if (x.year>2010) {
        console.log (`${x.make} ${x.model}, ${x.year} belongs to VA`);
        count++;
        total +=x.mileage;
    }
});

console.log(`${count} cars have total of ${total}.000 miles`);