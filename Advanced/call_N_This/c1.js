function setUserName(username){
    this.username=username;
}
function setUser(username,age,salary){
    setUserName.call(this, username);
    this.age=age;
    this.salary=salary;
    
}

const ame= new setUser("Aayush",20,100);
console.log(ame);
