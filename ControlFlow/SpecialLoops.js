// const arr=[1,2,3,4,5]
// for (const val of arr) {
//     console.log(val);
// }

const map= new Map();
 // for of loop is used to traverse the arrays or to iterate the arrays
// for in loop only gives key, not the value
const myobj={
    tata: "Nexon",
    maruti: "Fronx",
    mahindra:"XUV 700",
}

// for (const key in myobj) {
//     console.log(`The best seller car of ${key} is ${myobj[key]}`);
// }

// ------------------------------------------------------------------------------------------------

// const myAr=["Car","Bike","Ship","Airplane","Helicopter"];

// const vat= myAr.forEach( (i) =>{
//     console.log(i);
//     return i;
// })

// console.log(vat); 

//For each loop also haves the access of item, index and the entire array

const myArr=["Hello","World","My","Name","is","Aayush"];
myArr.forEach((i,index,myArr)=>{
    console.log(i,index,myArr);
})
