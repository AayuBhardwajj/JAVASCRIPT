let myAr=["Harry","Sharry","Garry","Aerry"];

for (const i of myAr) {
    console.log(myAr);
    
}

let hey="Hello Ji!!";
for (const hi of hey) {
    console.log(`${hi}`);
    
}

let m= new Map();  // Holds data in key-value pairs. doesnt allows duplicated value and maintians the original order throughout
 
m.set(1,"India");
m.set(2,"Australia");
m.set(3,"Russia");
m.set(1,"India");

// for(let [key, value] of m){
//     console.log(key, ":" , value);        // Tareeka of printing key-value pairs of map. 
// }

// // for loop in case of traversing object

let myObj={
    name: "Aayush",
    age:20,
    branch:"CSE"
}

for(let r in myObj){
    console.log(`${r} : ${myObj[r]}`)  // Used for in loop to traverse object, printing "r" would only print keys and printing myObj[r] would print values also.
    
}
 
// // for of loop prints the value directly while for in loop prints the keys.


// // for each loop
console.log(".........................");

let coding=["Java","JavaScript","Python"];
coding.forEach(function(i){
    console.log(i);
})
console.log(".........................");
coding.forEach((i)=>{
    console.log(i);
})
console.log(".........................");
function printMe(x){
    console.log(x);
}

coding.forEach(printMe);

coding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
    
})
console.log("........................."); 
let codingg=[
    {
    language: "JavaScript",
    fileName: "Js"
    },
    {
        language: "Python",
        fileName: "Py"
    },
    {
        language:"Java",
        fileName:"Java"
    }
]

codingg.forEach((item)=>{
    // console.log(item.fileName);
    // console.log(item.language);
    console.log(`${item.language} : ${item.fileName}`);
    
})

