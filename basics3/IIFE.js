// Immediately Invoked Function Expression

// Used to protect the block of out code from the garbage or unwanted effect from global varaibles.

// Nothing special, bss apne function ko ek ( ) me wrap kr do, it'll protect the function from global variables.


(() =>{
    console.log("Hello Ji");
}) ();

(
(name) =>{
    console.log(`${name}, just accessed the portal`)
} ) ("Aayush");
