let myArray=[1,2,3,4,5,6];

// myArray.push(7);
// console.log(`After push: ${myArray}`);

// myArray.pop();
// console.log(`After pop: ${myArray}`);

// myArray.unshift(9);
// console.log(`After unshift: ${myArray}`); 
 
// myArray.shift();
// console.log(`After shift: ${myArray}`);

// console.log(myArray.includes(2));
 
// let newArray= myArray.join(); // .join operation converts array to a string 

// console.log(typeof newArray);

let arr1= myArray.slice(0,3);
console.log();
console.log(`Array after slicing: ${myArray}`);
console.log();

console.log(`Sliced part: ${arr1}`);

let arr2= myArray.splice(0,2);
console.log();
console.log(`Array after splicing: ${myArray}`);
console.log();

console.log(`Slpiced part: ${arr2}`);

