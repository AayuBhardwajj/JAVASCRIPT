// let user={
//     username:"Aayush",
//     age:19,
//     welcomeMessage: function(){
//         console.log(`${this.username}, just entered the website`);
//     }
// }
// user.welcomeMessage();
// user.username="Ayush";
// user.welcomeMessage();

// const myfun= function(){
//     name="Aayush";
//     console.log(this.name);
// }

// myfun();

// const chai=()=>{
//     console.log(this);
// }

function addTwo(a,b){
    return a+b;
}

console.log(addTwo(2,3));

const add= function (c,d){
    return console.log(c+d);   // If wrapped in curly braces, return likhna pdega
}



add(4,5);   

const add1 = (r,t) => (r+t).   // If not wrapped in curly braces, no return needed

console.log(`value of addition `,(add1(2,3)));


