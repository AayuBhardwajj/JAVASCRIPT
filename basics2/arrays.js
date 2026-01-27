let myArray=[1,2,3,4,5,6];

myArray.push(7);
console.log(`After push: ${myArray}`);

myArray.pop();
console.log(`After pop: ${myArray}`);

myArray.unshift(9);
 console.log(`After unshift: ${myArray}`); 
 
myArray.shift();
 console.log(`After shift: ${myArray}`);

console.log(myArray.includes(2));
 
let newArray= myArray.join(); // .join operation converts array to a string 

console.log(typeof newArray);

let arr1= myArray.slice(0,3); 
console.log();
console.log(`Array after slicing: ${myArray}`);
console.log();

console.log(`Sliced part: ${arr1}`);

let arr21= myArray.splice(0,2);
console.log();
console.log(`Array after splicing: ${myArray}`);
console.log();

console.log(`Slpiced part: ${arr2}`);

let arr12=["Ironman","Batman","SuperMan"];
let arr23=["Joker","Thor","Loki"];
// arr1.push(arr2)
// console.log(`If I use push operation, the output would be: ${arr1}`); 
// let mergedArray= arr1.concat(arr2);

// console.log(`If i use concat operation, the output would be ${mergedArray}`);

// const all_heroes=[...arr1, ...arr2] // The concept of spreading, the other name for concatination
// console.log(all_heroes);

// let fArray=[1,2,3,["Hello","There","Hey"],5,6,["True","False",["Aayush"]]];
// let clearArray=fArray.flat(); // .flat deals in simplifying the array inside array thing.
// console.log(clearArray);

// console.log(Array.isArray("Aayush")); // Array.isArray( " ") checks whether the argument we pass is an array or not.
// console.log(Array.from("Aayush")); // Array .from(" ") creates the arguement passed in array. it is used when we need to take data from websites thst might be in any pther data structure and convert it into array.

// let name1="SQl";
// let name2="MySQL";
// let name3="PostSQL";

// console.log(Array.of(name1,name2,name3)); // Array.of function creates and returns a new array.

// //Array.is, from, of 