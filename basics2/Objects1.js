const user={                      // understanding the concept of nested objects.
    email: "Anyone@gmail.com",
    name: {
        fatherName:"Father",
        motherName:"Mother"
    },
    age:"Undefined"
};

// console.log(user.name.fatherName);
 
// Merging multiple objects into single 

// const obj1={1: "Hey", 2: "Hello "};
// const obj2={3: "Kya haal hai", 4:"Kya hi kr skte hai"};

// let finalObj=Object.assign({},obj1,obj2);   // Object.assign(target, source, source, source.. ), first value is the target, after it are all source.
// console.log(finalObj);

// let finalObj1={...obj1, ...obj2};   // Spreading method
// console.log(finalObj1);  

console.log(user)
console.log();
console.log(Object.keys(user)); // Prints the keys of object in form of array
console.log();
console.log(Object.values(user)); // Prints the values of keys in form of array
console.log();
console.log(Object.entries(user)); // Prints the key-value pairs in form of array
console.log();
console.log(Object.hasOwn(user, "age")); // Checks whether the key exists in object. Object.hasOwn(objectName, "key")