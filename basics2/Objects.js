// Objects are declared using 2 ways: literal and Constructor. 
// When object is made by a literal, singleton object instance is created and global access is provided through a closure.  (Apni tarah ka ek hi object hai.)
// When object is made by a constructor, its multiple instances could be created. To implement singleton behaviour with a consturctor, extra logic is needed.  
 

// Creating an object using object literal method.

const mySym= Symbol("SQZ");

const user={
    name: "XYZ",
    password: "Qwerty",
    age: 20,                       // In the backend, left side things like password/age/isFree etc. are stored as strings.
    isFree: false,
    userActivity: ["2 Hours on Monday", "3 Hours on Tuesday"],
    [mySym]: "SYmbol bn gya"
}
// console.log(user.userActivity);
// console.log(user["userActivity"]); // Different ways of accessing any property of an object.
// console.log(user[mySym]);

// Updating the value of any thing in object.

// console.log(`If i want to update the value of age in object, it will be ${user.age=97}`);


// Concept of freezing

// Object.freeze(user);
// user.name="Aayush";
// console.log(user);

// Concepts of functions

user.greeting= function (){
    console.log("Hello Ji");
}

user.greetingtwo= function(){
    console.log(`Hello ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greetingtwo());

