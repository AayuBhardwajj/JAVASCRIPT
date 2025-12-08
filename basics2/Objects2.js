let obj={
    name: "Naam",
    age: 69,
    structure: "crystal"
};

let{name: thisIsTheObjectName}=obj;  //restructing of a value, we alloted some other name to the original name that imporves the codebase.
console.log(thisIsTheObjectName); 
