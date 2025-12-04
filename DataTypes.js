/* Data Types are defined in 2 categories: Primitive & Non - Primitive
    Primitive & Non Primitive

    Primitive: Number, Boolean, String, Undefined, Null, BigInt, Symbol (Pass By Value)
    Non Primitve: Arrays, Objects, Functions (Pass By Reference)
     
*/

const num=100; // example of Number data type 
let isLoggedIn=true; // example of Boolean data type
const name="User"; // example of String data type
let vat; // example of Undefined data type
const crime=null; // example of null data type

const Id=Symbol("123");  // example of Symbol  data type
const SecondId=Symbol("123");

console.log(Id==SecondId);


// Examples of non-primitive datat type , return type of non primitive data type is "object" only.

const cars=["Mustang","LC","Gmc Denali","Porshe 911"]; // example of Array data type

let myFirstObject={   // example of Object data type, brackets ke biich me, left side -> variable : value of the variable
    name: "Aayush",                                                                          
    age: 20,                                                                                 
    hobbies: "Kyu btau?"
}

let myFirstFunction= function(){
    console.log("Hello World ");   // example of function data type, function(){ in curly braces ke biich me kaam     }
    
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Memeory is of two types: Stack and Heap Memory.

// Primitive Data Types are stored in stack memory. If we change the value of any primitive data type, its original value won't change because behind the scenes, its copy is alloted.
// Non Primitive Data Types are stored in heap memory. If we change the value of any non primitive data type, its original value will also change.


let a= 20;   // Here, I alloted a=20, and b = a.. till now, b should also be 20
let b=a;   
b=10;        // now, i changed the value of b from 20 to 10. As b=a, technically the original value of a should also change. But , because a copy of a was provided in stack memory, original value remains same.
console.log("Value of a: "+a);
console.log("Value of b: "+b);


let object={
    name: "Aayush",   // Here, i created an object , and alloted it some values.
    age: 20
}

let object1=object; // here, i stored the values of object in another object, object1.

object1.name= "Shyam"; // Now, i modified a value, name of object 1. As it was stored in heap memory, the original value will also change .


console.log(object);
console.log(object1);
