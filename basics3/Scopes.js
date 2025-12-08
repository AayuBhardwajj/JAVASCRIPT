let user={
    username: "Aayush",
    password:"123@",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcomeMessage();

function glo(){
    console.log(this);         //  because this function was not stored in any variable, 
}                                //  it printed the global values working in the back end
glo();


const qt= function(){
    let username="Aayush";        //  This gives the output of undefined because this looks for a global object
    console.log(this.username);  //   As global object doesn't exists, it gives output as undefinied.
}

qt();

const addition = (a,b) =>{
    return a+b;                      // If using { }, return statement is necessary.
}

console.log(addition(2,3)); 

const subtraction = (a,b) =>(a-b);    // If not using { }, to return the value , wrap it up in ( )                         

console.log(subtraction(4,6));
 
// Taking object in arrow function

let aF = () =>({name: "Aayush"});
console.log(aF());
 