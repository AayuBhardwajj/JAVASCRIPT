class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const hey= new User("Aayush","Aayush123@gmail.com","abc");
console.log(hey.changeUserName());


class random extends User{
    constructor(username, email, password, location){
        super(username);
        this.email=email;
        this.password=password;
        this.location=location;
    }
    shareLocation(){
        console.log(`Hello, random user, your name is: ${this.username}`);
        console.log(`${this.email}, was detected as logged in email`);
        
    }
}

const ran= new random("Aayush","bh@gmail.com","12345","CHD");
ran.shareLocation();

console.log(hey instanceof User);
