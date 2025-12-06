// console.log(Math.abs(-9));
// let a=Math.round(4.7);
// console.log(`The rounded of value of 4.7 is ${a} `);
// let b=Math.ceil(4.3);
// console.log(`The ceiling value of 4.3 is ${b}`);
// let c=Math.floor(4.3);
// console.log(`Floor value of 4.3 is ${c}`);

// console.log(Math.random());  gives any random value, between 0 & 1 in decimals.
//console.log(Math.random()*10); // gives random values, but mostly values between 0 n 9, 0 could still be the output.
//console.log((Math.random()*10)+1); // This guarantees that values will now be between 1 to 10. if the answer was to be 0.0 something, +1 would make it 1. Hence the minimum value in this case would be 1.
//console.log(Math.floor(Math.random()*10)+1); // This guarantees that a single digit value will be the output, rounded off to the lower value.

const min=10;
const max=20;

let y=Math.random() * (max-min); //  max - min gives the range .. giving values between 0 & 10 
let z= Math.floor(y); // gives the single digit value, rounded off to the lower limit.
console.log(z + min); // minimum is 10. adding 10 will make the output range between 10 n 20. , It is the logic
