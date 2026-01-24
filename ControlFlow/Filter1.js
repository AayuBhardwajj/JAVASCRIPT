const myNums=[1,2,3,4,5,6,7,8,9,10]
// const fil= myNums.filter((num)=> num>3);
// console.log(fil);

// const value=myNums.map( (i) => i*10).filter((i)=>i>20);
// console.log(value);


/////////////////////////////////////////////////////////////////

const num=[1,2,3];

const red= num.reduce( (acc,currval) => {
    console.log(`value of accumulator: ${acc} && current value is: ${currval}`);
    
    return acc+currval;
},0)

console.log(red);
