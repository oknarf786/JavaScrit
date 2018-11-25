let dadHappy = function(isHappy){
    return new Promise((resolve,reject) =>{
        if(isHappy){
            resolve("1.Dad happy"); 
        } else {
            reject("Dad NOT Happy");
        }

    })
}


let showNewCar = function(){
    return new Promise((resolve,reject)=>{
        resolve("3.Show your new car")
    })
}


let newCar = function(happy){
    return new Promise((resolve,reject)=>{
        dadHappy(happy).then(a=>{
            showNewCar(a).then(b=>{
                resolve(a + " 2.Got new car " + b);
            })
        }).catch(c=>{
            reject(c);
        })

    })
}




// If dad is happy               // -> 1.Dad happy 2.Got new car 3.Show your new car
newCar(true).then(result=>{
    console.log(result);
}).catch(r => {
    console.log(r);
})


// If dad is NOT happy           // -> Dad NOT Happy
newCar(false).then(resultFalse=>{
    console.log(resultFalse);
}).catch(rFalse => {
    console.log(rFalse);
})