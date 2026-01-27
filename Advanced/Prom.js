//--The Promise object represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value.-->

//--Jo bhi task diya hai, vo abhi ke abhi queue me lag ke complete nhi hoga. Queue me lg gya hai, abhi ke abhi usko load krke complete nhi kr skte  -->
const prom=new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log("Async task is completed");   
        resolve();  
    }, 1000)
});

prom.then(function(){
   // console.log("Promise consumed");
    
})  ///.then() is related with resolve.. it returns the value recieved in promise


// In this promise, I understood how data is passed in promise using resolve() and recieved in .then() function
const prom1= new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "Aayush", age: 20})
    }, 1000)
})

prom1.then(function(ob){
    console.log(ob);
    
})