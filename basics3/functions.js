function myName(){
    console.log("My name is pineapple");
}

myName();

function addition(a, b){
    console.log(a+b);
}

addition(5,7);

function loggedIn(user){ 
    return `${user} just logged in`;
}

console.log(loggedIn("Aayush"));

//Rest operator , used to take input for multiple values without actually defining them, and stores & returns those n number of inputs in form of an array.

function totalPrice(... num){
    return num;
}

console.log(totalPrice(200,300,500,700));

function prices(num1, num2, ...num3){
    return num3;
}
console.log(prices(100,200,300,400,500,6007,700)); // in this case, first 2 values would be stored in num1 & num2 variables respectively.

// Understanding the concept of using objects in functions.
let user ={
    name: "Aayush",
    age: 20,
    domain: "Unknown"
}

function handleObject(any){
    console.log(`${any.name}, who's age is ${any.age} and has got the domain of ${any.domain} just used the function` );
}

handleObject(user);

// Understanding the concept of using arrays in functions.

let myAr=[1,2,3,4,5,6];

function returnThridValue(any){
    console.log(`Value of third element stored in array is: ${any[2]}`);
    
}
returnThridValue(myAr);