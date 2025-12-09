let num=[1,2,3];

// let ans=num.reduce(function (acc, currVal)
// {
// console.log(`acc value: ${acc} && Current value: ${currVal}`);
// return acc+currVal;
// },0);

let ans=num.reduce((acc,currVal)=>acc+currVal,0);
console.log(ans);

let qw=[
    {
        item:"Book",
        price:500
    },
    {
        item:"Milk",
        price:93
    },
    {
        item:"Pen",
        price:30
    },  
]

let totalSum=qw.reduce((acc,x)=> x.price+acc ,0);
console.log(totalSum);
