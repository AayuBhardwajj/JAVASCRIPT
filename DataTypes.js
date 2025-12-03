/* Data Types are defined in 2 categories: Primitive & Non - Primitive
    Primitive & Non Primitive

    Primitive: Number, Boolean, String, Undefined, Null, BigInt, Symbol (Pass By Value)
    Non Primitve: Arrays, Objects, Functions (Pass By Reference)
     
*/

const num=100; 
let isLoggedIn=true;
const name="User";
let vat;
const crime=null;

const Id=Symbol("123");
const SecondId=Symbol("123");

console.log(Id==SecondId);
